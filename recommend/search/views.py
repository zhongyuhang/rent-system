from django.shortcuts import render
from .models import House
import requests
from .util_class import UtilClass
from django.core.cache import cache
import pandas as pd
from sklearn.cluster import KMeans
import numpy as np
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    # 房子查找页面的主页
    return render(request, 'search/index.html')

@csrf_exempt
def search_house(request):
    company, subway = request.POST['info'].split('+')
    md_key = f"{company}-{subway}"
    destination = UtilClass().getGeocode(company)
    if cache.has_key(md_key):
        houses = cache.get(md_key)
    else:
        houses = rate_the_house(destination, subway)
        cache.set(md_key, houses, 60 * 60)
    data = {'houses': houses, 'company_geocode': destination}
    return render(request, 'search/search_result.html', context=data)

def rate_the_house(destination, subway):
    """
    {'http://sh.ziroom.com/z/vr/62017852.html':['http://sh.ziroom.com/z/vr/62017852.html', '友家·唐家沙小区2居室-南卧', 11.1, '06^6',
    '2^1', '距1号线延长路站直线814米', '延长路', '121.465652,31.270571', 2690, '合租',驾车规划距离，驾车时间，公交规划距离，公交时间，步行规划距离，步行时间]}
    """
    navigation_data = []
    houses = []
    for house in get_house_data(subway):
        house_dict = {}
        house_dict['id'] = house.id
        house_dict['house_url'] = house.house_url
        house_dict['house_title'] = house.house_title
        house_dict['house_area'] = house.house_area
        house_dict['house_floor'] = house.house_floor
        house_dict['house_model'] = house.house_model
        house_dict['house_traffic'] = house.house_traffic
        house_dict['house_subway'] = house.house_subway
        house_dict['house_geocode'] = house.house_geocode
        house_dict['house_price'] = house.house_price
        house_dict['house_rent'] = house.house_rent
        DistanceAndTime = UtilClass().get_destination_and_time(house.house_geocode, destination)
        navigation_data.append(
            [
                DistanceAndTime[0]['results'][0]['distance'],
                DistanceAndTime[1]['results'][0]['distance'],
                DistanceAndTime[2]['results'][0]['distance'],
                house.house_area,
                house.house_price,
                get_KFC(house.house_geocode)
            ]
        )
        houses.append(house_dict)
    score = get_score(navigation_data)
    for i in range(len(houses)):
        houses[i]['house_score'] = score[i]
    return sorted(houses, key=lambda score: score['house_score'], reverse=True)

def get_house_data(subway):
    return House.objects.filter(house_subway=subway)[:20]

def get_KFC(geoCode, key_word=u'肯德基'):
    para = {'location': geoCode, 'city': '成都', 'keywords': key_word,
            'key': 'ff7c4d965be7bbfcf3e18cf034f4f033', 'radius': 3000}
    base = 'https://restapi.amap.com/v3/place/around?parameters '
    response = requests.get(base, para)
    return len(response.json()['pois'])


def get_score(data):
    """
    k_means算法：将各个维度的数据分为三类
    """
    rates = {
        '驾车距离': 10,
        '步行距离': 20,
        '公交距离': 5,
        '价格': 20,
        '房间大小': 30,
        '周边繁华度': 10
    }
    load_data = pd.DataFrame(data)
    score = []
    for i in range(5):
        loan = np.array(load_data[[0]])
        clf = KMeans(n_clusters=3)
        clf = clf.fit(loan)
        min_label = list(clf.cluster_centers_).index(min(clf.cluster_centers_)) if i != 3 else list(
            clf.cluster_centers_).index(max(clf.cluster_centers_))
        max_label = list(clf.cluster_centers_).index(max(clf.cluster_centers_)) if i != 3 else list(
            clf.cluster_centers_).index(min(clf.cluster_centers_))
        for index in range(len(clf.labels_)):
            if clf.labels_[index] == min_label:
                clf.labels_[index] = 9
            elif clf.labels_[index] == max_label:
                clf.labels_[index] = 7
            else:
                clf.labels_[index] = 8
        load_data['label_' + str(i + 1)] = clf.labels_

    for i in range(len(load_data)):
        tmp_score = rates['驾车距离'] * (load_data['label_1'][i] - 6) + \
                    rates['公交距离'] * (load_data['label_2'][i] - 6) + \
                    rates['步行距离'] * (load_data['label_3'][i] - 6) + \
                    rates['价格'] * (load_data['label_4'][i] - 6) + \
                    rates['房间大小'] * (load_data['label_5'][i] - 6) + \
                    rates['周边繁华度'] * load_data[5][i]
        score.append(tmp_score)
    return score

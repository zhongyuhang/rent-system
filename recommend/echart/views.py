from django.shortcuts import render
from search.models import House
from django.db.models import Sum, Avg
from django.db.models import Count

# import math
# from django.http import HttpResponse
# from django.template import loader

REMOTE_HOST = ''


# Create your views here.
def index(request):
	all_house = len(House.objects.all())
	zhengzu_house = len(House.objects.filter(house_rent="整租"))
	hezu_house = len(House.objects.filter(house_rent="合租"))
	all_avg = House.objects.all().aggregate(Avg('house_price'))
	ave_price = House.objects.filter(house_rent='整租').aggregate(Avg('house_price'))
	ave_pricetwo = House.objects.filter(house_rent='合租').aggregate(Avg('house_price'))
	scale_zheng = round(zhengzu_house / all_house, 3) * 100
	scale_he = round(hezu_house / all_house, 3) * 100
	houses = House.objects.values("house_subway").annotate(total_houses=Count("*")).order_by("-total_houses")[:6]
	current_houses = House.objects.values('house_area', 'house_price')[:200]
	data = {
		'all_house': all_house,
		'zhengzu_house': zhengzu_house,
		'hezu_house': hezu_house,
		'ave_price': ave_price,
		'ave_pricetwo': ave_pricetwo,
		'all_avg': all_avg,
		'scale_zheng': scale_zheng,
		'scale_he': scale_he,
		'houses': houses,
		'current_houses': list(current_houses)}
	return render(request, 'echart/index.html', context=data)

def pyechart(request):
	return render(request, 'echart/pyecharts.html')

def echarts(request):
	return render(request, 'echart/echarts.html')

def test(request):
	houses = House.objects.values("house_subway").annotate(total_houses=Count("*")).order_by("-total_houses")[:6]
	return render(request, 'echart/pyecharts.html', {'houses': houses})

def threed(request):
	houses = House.objects.values('house_area', 'house_price')[:200]
	data = {'houses': list(houses)}
	return render(request, 'echart/3d.html', context=data)

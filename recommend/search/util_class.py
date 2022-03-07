import requests

class UtilClass:
    
    def __init__(self) -> None:
        # 高德地图API-key
        # url: https://console.amap.com/dev/key/app
        self.key = 'ff7c4d965be7bbfcf3e18cf034f4f033'
        self.request = requests.Session()
           
    def prompt_address(self, address, city=''):
        """
        :param: 模糊地址
        :return: 精准地址
        """

        para = {'keywords': address, 'city': city, 'key': self.key}
        base = 'https://restapi.amap.com/v3/assistant/inputtips?parameters'
        response = requests.get(base, para)
        answer = response.json()
        return answer['tips'][0]['address'] if answer['tips'][0]['address'] else answer['tips'][0]['name']

    def getGeocode(self, address, city='chengdu'):
        """
        :param: 具体地址
        :return: 经纬度
        """
        try:
            para = {'address': address, 'key': self.key, 'city' : city}
            base = 'https://restapi.amap.com/v3/geocode/geo?parameters'
            response = self.request.get(base, para)
            answer = response.json()
            return answer['geocodes'][0]['location']
        # return answer
        except:
            correct_address = self.prompt_address(address, city)
            para = {'address': correct_address, 'city': city, 'key': self.key}
            base = 'https://restapi.amap.com/v3/geocode/geo?parameters'
            response = requests.get(base, para)
            answer = response.json()
            return answer['geocodes'][0]['location']


    def find_surrounding(self, res, key_word=u'肯德基'):
        # res[0]:公司经纬度 res[1]:公司所在城市详细ID
        # key_word:想要在公司周边搜索的东西
        # 返回3Km内搜索的 key_word 信息
        para = {'location': res[0], 'city': res[1], 'keywords': key_word, 'key': self.key}
        base = 'https://restapi.amap.com/v3/place/around?parameters '
        response = requests.get(base, para)
        # print(len(response.json()['pois']))
        return response


    def way2company(self, origins, destination):
        """
        传参为
        origins:房子所在经纬度，
        destination:公司所在的经纬度
        返回为
        0：（驾车导航距离,时间）。
        1：（公交规划距离,时间）
        2：（步行规划距离,时间）
        :param destination:
        :return:
        """
        para = {'origins': origins, 'destination': destination, 'key': self.key}
        walk_base = 'https://restapi.amap.com/v3/direction/walking?parameters'
        integrate_base = 'https://restapi.amap.com/v3/direction/transit/integrated?parameters'
        drive_base = 'https://restapi.amap.com/v3/direction/driving?parameters'
        bicycle_base = 'https://restapi.amap.com/v4/direction/bicycling?parameters'
        distance_base = 'https://restapi.amap.com/v3/distance?parameters'
        response = requests.get(distance_base, para)
        answer = response.json()
        return answer['results'][0]['distance']

    def get_destination_and_time(self, origins, destination):
        url = 'https://restapi.amap.com/v3/distance?parameters'
        # 对API接口的type参数分别等于1，2，3
        # 获取住处到公司的驾车/公交/步行距离
        result = []
        for i in range(1, 4):
            """
            0：直线距离
            1：驾车导航距离（仅支持国内坐标）
            2：公交规划距离（仅支持同城坐标,QPS不可超过1，否则可能导致意外）
            3：步行规划距离（仅支持5km之间的距离）
            """
            params = {'origins': origins, 'destination': destination, 'type': i, 'key': self.key}
            task = self.request.get(url,params=params)
            result.append(task.json())
        return result


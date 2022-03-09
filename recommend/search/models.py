from django.db import models

# Create your models here.
class House(models.Model):
	"""
	hosue_dict:房子url<f>房名<f>面积<f>楼^楼<f>室^厅<f>交通
	example:   //hz.ziroom.com/z/vr/61654409.html<f>友家·湘湖家园3居室-南卧<f>25.3<f>6^6<f>3^1<f>距1号线湘湖站直线602米
	"""
	house_url = models.CharField("房源url", max_length=200)
	house_title = models.CharField("房源名称", max_length=100)
	house_area = models.FloatField("面积")
	house_floor = models.CharField("楼层（6/6楼）", max_length=10)
	house_model = models.CharField("户型（3^1：三室一厅）", max_length=10)
	house_traffic = models.CharField("离附近交通位置", max_length=200)
	house_subway = models.CharField("所属地铁范围", max_length=200)
	house_geocode = models.CharField("小区所在经纬度", max_length=50)
	house_price = models.IntegerField("价格")
	house_rent = models.CharField("租赁方式(合租、整租)", max_length=20)
	class Meta:
		managed = False
		db_table = "search_house"

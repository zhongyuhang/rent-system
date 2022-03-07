from django.shortcuts import render
from django.db.models import Sum
from django.db.models import Avg
from search.models import House

# Create your views here.
def index(request):
	return render(request, 'homepage/index.html')

def about(request):
	return render(request, 'person/about.html')

def contact(request):
	return render(request, 'person/contact.html')

def single(request):
	all_house = len(House.objects.all())
	zhengzu_house = len(House.objects.filter(house_rent="整租"))
	hezu_house = len(House.objects.filter(house_rent="合租"))
	all_avg = House.objects.all().aggregate(Avg('house_price'))
	ave_price = House.objects.filter(house_rent='整租').aggregate(Avg('house_price'))
	ave_pricetwo = House.objects.filter(house_rent='合租').aggregate(Avg('house_price'))
	scale_zheng = round(zhengzu_house / all_house, 3) * 100
	scale_he = round(hezu_house / all_house, 3) * 100
	data = {
		'all_house': all_house,
		'zhengzu_house': zhengzu_house,
		'hezu_house': hezu_house,
		'ave_price': ave_price,
		'ave_pricetwo': ave_pricetwo,
		'all_avg': all_avg,
		'scale_zheng': scale_zheng,
		'scale_he': scale_he}
	return render(request, 'person/single.html', context=data)

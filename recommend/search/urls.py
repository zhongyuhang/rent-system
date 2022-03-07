from django.urls import path

from . import views

app_name = 'search'
urlpatterns = [
	# ex: /search/
	path('', views.index, name='index'),
	path('search_house/', views.search_house, name='search_house'),
]

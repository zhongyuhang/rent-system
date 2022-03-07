from django.urls import path

from . import views

app_name = 'echart'
urlpatterns = [
	# ex: /echart/
	path('', views.index, name='index'),
	path('test', views.test, name='test'),
	# ex: /echart/echarts/
	path('echarts/', views.echarts, name='echarts'),
	path('pyechart/', views.pyechart, name='pyechart'),
	path('3d', views.threed, name='search_house')
]

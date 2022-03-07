from django.urls import path

from . import views

app_name = 'commute'
urlpatterns = [
	# ex: /rank/
	path('', views.index, name='index'),
	path('walk/<str:start_code>/<str:end_code>', views.walk, name='walk'),
	path('bus/<str:start_code>/<str:end_code>', views.bus, name='bus'),
	path('drive/<str:start_code>/<str:end_code>', views.drive, name='drive'),
	path('bicycle/<str:start_code>/<str:end_code>', views.bicycle, name='bicycle')
]

from django.shortcuts import render

# Create your views here.
def index(request):
	data = {'geocode': {'start': '116.399028, 39.845042', 'end': '116.436281, 39.880719'}}
	return render(request, 'commute/index.html', context=data)

def walk(request, start_code, end_code):
	data = {'geocode': {'start': start_code, 'end': end_code}}
	return render(request, 'commute/walk.html', context=data)

def bus(request, start_code, end_code):
	data = {'geocode': {'start': start_code, 'end': end_code}}
	return render(request, 'commute/bus.html', context=data)

def drive(request, start_code, end_code):
	data = {'geocode': {'start': start_code, 'end': end_code}}
	return render(request, 'commute/drive.html', context=data)

def bicycle(request, start_code, end_code):
	data = {'geocode': {'start': start_code, 'end': end_code}}
	return render(request, 'commute/bicycle.html', context=data)

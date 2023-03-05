from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def homeView(request):
    return JsonResponse('home',safe=False)
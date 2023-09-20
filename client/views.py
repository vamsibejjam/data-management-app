
from django.shortcuts import render, redirect,HttpResponse
from django.contrib import messages
from . models import product

def home(request):
    
    if request.method == 'POST':
        
        productname=request.POST['product']
        volume=request.POST['vol']
        marketcapital=request.POST['capital']
        creditrating=request.POST['rating']
        
        if product.objects.filter(product_name=productname).exists():
            messages.info(request,'details already exists')
            return redirect('home')
        else:
            product_obj=product.objects.create(product_name=productname,volume=volume,market_capital=marketcapital,credit_rating=creditrating)
            return redirect('home')
        
    pro = product.objects.all()
    return render(request,'home.html',{'prodobj':pro})

def data(request):
    pro = product.objects.all()
    return render(request,'data.html',{'prodobj':pro})

def delete(request,name):
    del_product=product.objects.get(product_name=name)
    del_product.delete()
    return redirect('home')

def update(request,name):
    if request.method == 'POST':
        productname=request.POST['product']
        vol=request.POST['vol']
        marketcapital=request.POST['capital']
        creditrating=request.POST['rating']
    update_product=product.objects.get(product_name=name)
    update_product.product_name=productname
    update_product.volume=vol
    update_product.market_capital=marketcapital
    update_product.credit_rating=creditrating
    update_product.save()
    return redirect('home')


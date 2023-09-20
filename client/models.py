from django.db import models

class product(models.Model):
    ser_no=models.IntegerField(null=True)
    product_name=models.CharField(primary_key=True, max_length=100)
    volume=models.IntegerField(default=0)
    market_capital=models.FloatField(default=0)
    credit_rating=models.FloatField(default=0)
     
    def __str__(self) :
        return self.product_name


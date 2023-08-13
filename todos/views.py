from django.shortcuts import render
from .searializers import *
from .models import *
from rest_framework import viewsets
from rest_framework import generics

# Create your views here.

class Photosviewset(viewsets.ModelViewSet):
    queryset = photos.objects.all()
    serializer_class = PhotosSerializer
class Quotesviewset(viewsets.ModelViewSet):
    queryset=Quotes.objects.all()
    serializer_class=QuoteSerializer
class Ringtoesviewset(viewsets.ModelViewSet):
    queryset=Ringtones.objects.all()
    serializer_class=RingtonesSerializer    
class photoscatviewset(viewsets.ModelViewSet):
    queryset= photoscat.objects.all()
    serializer_class=PhotoscatSerializer
class Quotescatviewset(viewsets.ModelViewSet):
    queryset= Quotescat.objects.all()
    serializer_class=QuotescatSerializer        
class Ringtonescategoryviewset(viewsets.ModelViewSet):
    queryset=Ringtonescategory.objects.all()
    serializer_class=RingtonescategorySerializer 

class QuestionList(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    
class AnswerOption(viewsets.ModelViewSet):
    queryset = AnswerOption.objects.all()
    serializer_class =AnswerOptionSerializer    
    
              
        
    
from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'photos', Photosviewset)
router.register(r'ringtones',Ringtoesviewset)
router.register(r'quotes',Quotesviewset)
router.register(r'photocatagorys',photoscatviewset)
router.register(r'Quotescat',Quotescatviewset)
router.register(r'Ringtonescategory',Ringtonescategoryviewset)
router.register(r'QuestionList',QuestionList)
router.register(r'AnswerOption',AnswerOption)
urlpatterns =router.urls
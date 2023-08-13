from rest_framework import serializers
from .models import *
from .models import Question, AnswerOption

class  PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model=photos
        fields='__all__'
class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Quotes
        fields='__all__'
class  RingtonesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Ringtones
        fields='__all__'
class  RingtonescategorySerializer(serializers.ModelSerializer):
    class Meta:
        model= Ringtonescategory
        fields='__all__'        
        
class  QuotescatSerializer(serializers.ModelSerializer):
    class Meta:
        model= Quotescat
        fields='__all__'  
class PhotoscatSerializer(serializers.ModelSerializer):
    class Meta:
        model=photoscat
        fields='__all__'                                   
                    


class AnswerOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswerOption
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    answerOptions = AnswerOptionSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = ['questionText', 'answerOptions']    
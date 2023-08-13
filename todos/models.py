from django.db import models

class photoscat(models.Model):
    photo=models.CharField(max_length=50)
    image=models.ImageField(upload_to='images/')
    def __str__(self):
        return self.photo
    
class photos(models.Model):   
    category=models.ForeignKey("photoscat", on_delete=models.CASCADE,related_name='catagory')
    name=models.CharField(max_length=100)
    size=models.CharField(max_length=2)
    image=models.ImageField(upload_to='images/')
    download_link=models.TextField()
    def __str__(self):
        return self.name

class Quotescat(models.Model):
    Quote_category=models.CharField(max_length=50)
    def __str__(self):
        return self.Quote_category  
   
class Quotes(models.Model):
    catagory=models.ForeignKey("Quotescat", on_delete=models.CASCADE,related_name='catagory')
    Quote=models.TextField()
    def __str__(self):
        return self.catagory
    
class Ringtonescategory(models.Model):
    ringtone_category=models.CharField(max_length=50)
    image=models.ImageField(upload_to='images/')
    def __str__(self):
        return self.ringtone_category
    
class Ringtones(models.Model):
    category=models.ForeignKey("Ringtonescategory", on_delete=models.CASCADE, related_name='category')
    tone_title=models.CharField(max_length=100)
    audio=models.FileField(upload_to='audio/')
    download_link=models.TextField()
    tags=models.CharField(max_length=100)
    def __str__(self):
        return self.tone_title
        
class Question(models.Model):
    questionText = models.CharField(max_length=255)
    def __str__(self):
        return self.questionText
    
class AnswerOption(models.Model):
    question = models.ForeignKey(Question, related_name='answerOptions', on_delete=models.CASCADE)
    answerText = models.CharField(max_length=255)
    isCorrect = models.BooleanField(default=False)
    styleclass = models.CharField(max_length=50)
    def __str__(self):
        return self.question    

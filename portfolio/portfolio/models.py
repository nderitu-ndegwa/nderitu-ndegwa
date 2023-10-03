# main/models.py

from django.db import models

class Project(models.Model):
    # Required fields
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=50)
    about = models.CharField(max_length=2000)

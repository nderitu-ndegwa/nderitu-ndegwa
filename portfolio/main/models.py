# main/models.py

from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=50)
    image = models.ImageField(upload_to='project_images/', null=True, blank=True)

    def __str__(self):
        return self.title

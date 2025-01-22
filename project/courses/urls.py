from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('student/create/', views.student_create, name='student_create'),
]

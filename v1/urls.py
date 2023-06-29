from django.urls import path
from v1.views.home.index import HomeView

urlpatterns = [
    path(
        "",
        HomeView,
    ),
]

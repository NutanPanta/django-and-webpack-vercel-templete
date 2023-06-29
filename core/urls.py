from django.contrib import admin
from django.urls import re_path, include, path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("management/", admin.site.urls),
    re_path(r"^", include(("v1.urls", "v1"), namespace="v1")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

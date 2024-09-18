from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, DonorViewSet, MentorViewSet, ResourceViewSet

router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'donors', DonorViewSet)
router.register(r'mentors', MentorViewSet)
router.register(r'resources', ResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

import graphene
from graphene_django import DjangoObjectType
from .models import Post


class PostDjangoObject(DjangoObjectType):
    class Meta:
        model = Post


class Query(graphene.ObjectType):
    posts = graphene.List(PostDjangoObject)

    def resolve_posts(self, info):
        return Post.objects.all()


schema = graphene.Schema(query=Query)

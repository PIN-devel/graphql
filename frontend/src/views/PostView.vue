<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
<script>
import Post from "@/components/Post.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "PostView",
  components: {
    Post,
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>


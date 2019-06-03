<template>
  <div>
    <all-posts
      :allPosts="allPosts"
    ></all-posts>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import AllPosts from "./AllPosts.vue";

export default {
  name: "PostsView",
  data() {
    return {
      allPosts: [],
      slug: this.$route.params.slug
    };
  },
  components: {
    AllPosts
  },

  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>




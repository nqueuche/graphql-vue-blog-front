<template>
  <div>
    <all-posts
      :allPosts="allPosts.filter(post => post.primary_tag.name.toLowerCase() === (tag === undefined ? slug : tag))"
    ></all-posts>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import AllPosts from "./AllPosts.vue";

export default {
  name: "TagPosts",
  props: ["tag"],
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




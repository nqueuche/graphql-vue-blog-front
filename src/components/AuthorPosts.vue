<template>
  <div>
    <all-posts :allPosts="allPosts.filter(post => post.primary_author.slug.toLowerCase() === slug.toLowerCase())"></all-posts>
  
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import AllPosts from "./AllPosts.vue";

export default {
  name: "AuthorPosts",
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

<style>
.all-posts {
  min-width: 100%;
  padding: 5em;
}

img.card-img {
  max-height: 15rem;
  object-fit: cover;
}

.card-body {
  min-height: 15rem;
}

.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>

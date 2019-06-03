<template>
  <div>
    <b-container class="all-posts">
      <b-row>
        <b-col
          sm="4"
          v-for="post in allPosts.filter(post => post.primary_author.slug.toLowerCase() === slug.toLowerCase())"
          :key="post.id"
        >
          <b-card :img-src="post.feature_image" class="mb-4">
            <a :href="'/' + post.slug">
              <h4>{{post.title}}</h4>
            </a>
            <a :href="'/tag/' + post.primary_tag.slug">
              <div class="suggested-tag">{{ post.primary_tag.name }}</div>
            </a>
            <a :href="'/author/' + post.primary_author.name">
              <div class="suggested-author">{{post.primary_author.name}}</div>
            </a>
            <h4></h4>
            <p card-text>{{ post.custom_excerpt}}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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

  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY,
      variables() {
        return {
          slug: this.slug
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


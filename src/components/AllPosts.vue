<template>
  <div>
    <b-container class="all-posts">
      <b-row>
        <b-col sm="4" v-for="post in allPosts" :key="post.id">
          <b-card :img-src="post.feature_image" class="mb-4">
            <a :href="'/'+post.slug">
              <h4>{{post.title}}</h4>
            </a>
            <p>Publié le : {{post.published_at | dateformat}}</p>

            <a :href="'/tag/' + post.primary_tag.slug">
              <div class="suggested-tag">{{ post.primary_tag.name}}</div>
            </a>
            <a :href="'/author/' + post.primary_author.slug">
              <div class="suggested-author">{{post.primary_author.name}}</div>
            </a>
            <p card-text>{{ post.custom_excerpt}}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import moment from "moment";

export default {
  name: "AllPosts",
  props: ["allPosts"],
  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY,
      variables() {
        return {
          slug: this.slug
        };
      }
    }
  },
  filters: {
    dateformat: function(value) {
      moment.locale("fr");
      return moment(value).format("LL");
    },
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

.card-text {
  display: block;
}

.card-body {
  min-height: 15rem;
}

.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
.suggested-author {
  color: #3d3d3d;
}
</style>


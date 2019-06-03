<template>
  <!-- Footer -->
  <div class="custom-footer">
    <b-container class="text-left">
      <b-row>
        <b-col sm="6">
          <h5 class="title">Derniers articles</h5>
          <ul>
            <li class="list-unstyled">
              <a
                href="#!"
                class="footer-links"
                v-for="post in allPosts.slice(0, 5)"
                :key="post.id"
              >{{post.title}}</a>
            </li>
          </ul>
        </b-col>
        <b-col sm="6">
          <h5 class="title">Explorer</h5>
          <ul>
            <li class="list-unstyled">
              <a href="#!" class="footer-links" v-for="tag in allTags" :key="tag.id">{{tag.name}}</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        &copy; 2019 Copyright :
        <a href="https://skinapp.com" class="footer-links">Skinapp.com</a>
      </b-container>
    </div>
  </div>
  <!-- Footer -->
</template>

<script>
import { ALL_TAGS_QUERY } from "../constants/graphql";
import { ALL_POSTS_QUERY } from "../constants/graphql";

export default {
  name: "AppFooter",
  data() {
    return {
      allTags: [],
      allPosts: [],
      slug: this.$route.params.slug
    };
  },

  apollo: {
    allTags: {
      query: ALL_TAGS_QUERY,
      variables() {
        return {
          slug: this.slug
        };
      }
    },
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
.custom-footer {
  background-color: #2c2c2c;
  color: white;
  padding: 3em;
}

.footer-links {
  color: white;
  display: block;
}
</style>


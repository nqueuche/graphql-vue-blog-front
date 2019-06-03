<template>
  <div>
    <div class="last-posts">
      <h2 class="homepage-titles">À la une</h2>
      <all-posts :allPosts="allPosts.slice(0, 3)"></all-posts>
      <b-button href="/all" variant="outline-primary" class="discover-more">Découvrir plus</b-button>
    </div>
    <div class="last-tag1">
      <h3 class="homepage-titles">Catégorie : Antibiotiques</h3>
      <all-posts :allPosts="allPosts.filter(post => post.primary_tag.name === 'Antibiotiques').slice(0, 3)"></all-posts>
      <b-button href="/tag/antibiotiques" variant="outline-primary" class="discover-more">Découvrir plus</b-button>
    </div>
    <div class="last-tag2">
      <h3 class="homepage-titles">Catégorie : Roaccutane</h3>

      <all-posts :allPosts="allPosts.filter(post => post.primary_tag.name === 'Roaccutane').slice(0, 3)"></all-posts>
      <b-button href="/tag/roaccutane" variant="outline-primary" class="discover-more">Découvrir plus</b-button>
    </div>
  </div>
</template>

<script>
import AllPosts from "./AllPosts";
import { ALL_POSTS_QUERY } from "../constants/graphql";


export default {
  name: "HomePage",
  components: {
    AllPosts
    },
  data() {
    return {
      allPosts: []
    };
  },
  apollo: {
    allPosts: {
      query: ALL_POSTS_QUERY
    }
  },
};
</script>

<style>
.homepage-titles {
  text-align: left;
  padding-left: 3em;
  padding-top: 3em;
}
.last-posts {
  background-color: #e3e3e3;
}
.last-tag1 {
  background-color: white;
}
.last-tag2 {
  padding: 1em;

  background-color: #e3e3e3;
}

.discover-more {
    border-color: #6D64FF;
    color: #6D64FF;
    padding: 1em;
    margin: 1.5em;
}
.discover-more:hover {
    background-color: #6D64FF;
    color: white;
}
</style>


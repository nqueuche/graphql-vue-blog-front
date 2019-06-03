<template>
  <section>
    <div>
      <b-container class="header-container">
        <b-row>
                  <div class="purple"></div>
          <b-col sm="6" class="header-image">
            <img id="featured" :src="post.feature_image" alt="feature-image">
          </b-col>
          <b-col sm="6" class="header-title">
            <a :href="'/tag/' + post.primary_tag.slug" class="tag">{{ post.primary_tag.name}}</a>
            <h1 class="title">{{ post.title }}</h1>
            <a :href="'/author/' + post.primary_author.slug" class="author">{{ post.primary_author.name}}</a>
          </b-col>
        </b-row>
      </b-container>


      <b-container>
          <b-row class="article-content">
            <b-col sm="1"></b-col>
            <b-col sm="10" v-html="post.html"></b-col>
            <b-col sm="1"></b-col>
          </b-row>
      </b-container>
      <suggested-posts></suggested-posts>
    </div>
  </section>
</template>
<style>
#featured {
  height: 400px;
  width: 80%;
  object-fit: cover;
  padding-top: 3em;
}

.header-container {
  width: 80vw;
  height: 400px;
  position: relative;
}
@media (max-width: 576px) {
  .header-container {
    height: 500px;
  }
  .purple {
    max-height: 400px;
  }
  .header-title {
    transform: none;
  }
}

.purple {
  width: 100%;
  height: 80%;
  background: #6346a2;
  position: absolute;
  z-index: -1;
}

.header-title {
  transform: translateY(30%);
}

.article-content {
  text-align: left;
  margin-top: 2em;
    margin-bottom: 2em;

}
</style>

<script>
import { POST_QUERY } from "../constants/graphql";
import SuggestedPosts from "./SuggestedPosts";

export default {
  name: "SinglePost",
  components: {
    SuggestedPosts
  },
  data() {
    return {
      post: "",
      slug: this.$route.params.slug
    };
  },
  apollo: {
    // fetch post by slug
    post: {
      query: POST_QUERY,
      variables() {
        return {
          slug: this.slug
        };
      }
    }
  }
};
</script>
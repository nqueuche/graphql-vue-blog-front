<template>
  <section>
    <div>
      <b-container class="suggested">
        <b-row class="suggested-posts">
          <b-col sm="1"></b-col>
          <b-col sm="10">
            <h1 id="suggested-title">Recommandés</h1>
            <h3>Pour aller plus loin...</h3>
          </b-col>
          <b-col sm="1"></b-col>
        </b-row>
      </b-container>
      <b-container class="suggested">
        <b-row class="suggested-posts">
          <b-col sm="4" v-for="post in allPosts.slice(0,3)" :key="post.id">
            <img id="suggested-image" :src="post.feature_image" alt="feature-image">

            <a :href="'/tag/' + post.primary_tag.slug">
              <div class="suggested-tag">{{ post.primary_tag.name}}</div>
            </a>
            <a :href="post.slug">
              <h4>{{post.title}}</h4>
              <p>Publié le : {{post.published_at | dateformat}}</p>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>
<style>
.suggested {
  min-width: 100%;
}
#suggested-title {
  color: #6d64ff;
  padding: 1em;
}
.suggested-posts {
  background-color: #f6f6f7;
  padding-bottom: 3em;
}

.suggested-tag {
  display: block;
  color: #6d64ff;
  text-transform: uppercase;
  margin-top: 0.5em;
  font-size: 11pt;
}

.suggested-links {
  margin: 0.5em;
  text-align: left;
}

#suggested-image {
  height: 300px;
  width: 80%;
  object-fit: cover;
}
</style>


<script>
import { ALL_POSTS_QUERY } from "../constants/graphql";
import moment from 'moment';

export default {
  name: "SuggestedPosts",
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
  filters: {
  dateformat: function (value) {
    moment.locale('fr');
    return moment(value).format('LL');
  }
  }
};
</script>


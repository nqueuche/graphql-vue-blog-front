<template>
  <div class="custom-navbar">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/" class="navbar-brand-centered">
        <img id="logo" src="../assets/logo.png" alt>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/all">Derniers articles</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown>
            <template slot="button-content">Catégories</template>
            <b-dropdown-item 
              :href="'/tag/' + tag.slug"
              v-for="tag in allTags"
              :key="tag.id"
            >{{tag.name}}</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { ALL_TAGS_QUERY } from "../constants/graphql";

export default {
  name: "AppHeader",
  data() {
    return {
      allTags: [],
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
    }
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  .navbar-brand-centered {
    position: absolute;
    left: 50%;
  }
}

.custom-navbar {
  margin: 2em;
}

#logo {
  max-height: 3em;
  margin: -3em;
}

.nav-link {
  margin-top: 1em;
}
</style>

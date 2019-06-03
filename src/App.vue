<template>
  <div id="app">
    <app-header></app-header>
    <div>
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";


export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

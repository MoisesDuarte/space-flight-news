<template>
  <main>
    <AppNavbar />
    <div class="container has-text-centered is-size-3">
      <h1>Space Flight News</h1>
      <hr />
    </div>
  </main>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

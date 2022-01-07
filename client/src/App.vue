<template>
  <main>
    <AppNavbar />
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

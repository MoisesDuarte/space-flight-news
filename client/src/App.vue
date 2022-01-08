<template>
  <main>
    <AppNavbar />
    <div class="container has-text-centered">
      <h1 class="py-6 is-size-3">Space Flight News</h1>
      <hr />

      <ArticleList :articles="articles" />

      <section>
        <button class="button is-link is-outlined">Carregar mais</button>
      </section>
    </div>
  </main>
</template>

<script>
import AppNavbar from "./components/base/AppNavbar.vue";
import ArticleList from "./components/ArticleList.vue";
import ApiResource from "./resources/ApiResource";

export default {
  name: "App",
  components: {
    AppNavbar,
    ArticleList,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    ApiResource.getArticles(0, 10).then((res) => {
      this.articles = res.articles;
    });
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

<template>
  <main>
    <AppNavbar @onSearch="sortByTitle($event)" />
    <div class="container has-text-centered">
      <h1 class="py-6 is-size-3">Space Flight News</h1>
      <hr />

      <ArticleList v-show="articles.length > 0" :articles="articles" />

      <section>
        <button
          v-if="pagination.totalPages - 1 > pagination.page"
          class="button is-link is-outlined mb-6"
          :disabled="isLoading"
          @click="loadMoreArticles"
        >
          Carregar mais
        </button>
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
      pagination: {
        title: "",
        page: 0,
        totalPages: 10,
      },
      isLoading: false,
    };
  },
  methods: {
    fetchArticles(page, limit, title = null, expand = false) {
      this.isLoading = true;

      ApiResource.getArticles(page, limit, title)
        .then(({ articles, pagination }) => {
          this.articles = expand ? [...this.articles, ...articles] : articles;
          this.pagination = pagination;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    sortByTitle(title) {
      this.fetchArticles(0, 10, title);
    },
    loadMoreArticles() {
      const { page, title } = this.pagination;
      this.fetchArticles(page + 1, 10, title, true);
    },
  },
  created() {
    this.fetchArticles(0, 10);
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

<template>
  <main>
    <AppNavbar
      @onSearch="sortByTitle($event)"
      @onSort="sortByPublished($event)"
    />

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
        sort: "asc",
      },
      isLoading: false,
    };
  },
  methods: {
    fetchArticles(page, limit, title = null, sort = null, expand = false) {
      this.isLoading = true;

      ApiResource.getArticles(page, limit, title, sort)
        .then(({ articles, pagination }) => {
          this.articles = expand ? [...this.articles, ...articles] : articles;
          this.pagination = pagination;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    sortByTitle(title) {
      const { sort } = this.pagination;
      this.fetchArticles(0, 10, title, sort);
    },
    sortByPublished(sort) {
      const { title } = this.pagination;
      this.fetchArticles(0, 10, title, sort);
    },
    loadMoreArticles() {
      const { page, title, sort } = this.pagination;
      this.fetchArticles(page + 1, 10, title, sort, true);
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

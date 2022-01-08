<template>
  <div class="container py-6">
    <section class="is-flex mb-4 is-justify-content-space-between">
      <div class="buttons">
        <button class="button">Adicionar</button>
      </div>
      <div class="field has-addons mb-0 mr-2">
        <div class="control">
          <input
            v-model="searchString"
            class="input"
            type="text"
            @keydown.native.enter="onSearch"
          />
        </div>
        <div class="control">
          <a role="button" class="button is-link" @click="onSearch">
            <img
              src="@/assets/icons/magnifying-glass.svg"
              style="width: 18px"
            />
          </a>
        </div>
      </div>
    </section>

    <div class="table-container">
      <table class="table is-bordered is-fullwidth is-narrow is-striped">
        <thead>
          <tr>
            <th v-for="col in columns">{{ col }}</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td v-for="col in columns" style="white-space: nowrap">
              {{ article[col] }}
            </td>
            <td style="white-space: nowrap">
              <button
                class="button is-danger is-small mr-2"
                @click="deleteArticle(article._id)"
              >
                Remover
              </button>
              <button class="button is-info is-small">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li v-for="(page, index) in pagination.totalPages">
          <a
            class="pagination-link"
            :class="{ 'is-current': pagination.page == index }"
            @click="goToPage(index)"
            >{{ index + 1 }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ApiResource from "@/resources/ApiResource";

export default {
  name: "Admin",
  data() {
    return {
      columns: [],
      articles: [],
      pagination: {},
      searchString: "",
    };
  },
  methods: {
    fetchArticles(page, limit, title = null, sort = null) {
      ApiResource.getArticles(page, limit, title, sort).then(
        ({ articles, pagination }) => {
          this.articles = articles;
          this.pagination = pagination;
          this.columns = Object.keys(articles[0]);
        }
      );
    },
    deleteArticle(id) {
      ApiResource.deleteArticle(id).then(() => {
        this.fetchArticles(0, 10);
      });
    },
    onSearch() {
      this.fetchArticles(0, 10, this.searchString);
    },
    goToPage(page) {
      this.fetchArticles(page, 10);
    },
  },
  created() {
    this.fetchArticles(0, 10);
  },
};
</script>

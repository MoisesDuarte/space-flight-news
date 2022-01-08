<template>
  <AppModal v-if="isModalActive" @onClose="isModalActive = false">
    <template #title> Novo Artigo </template>
    <ArticleForm
      @onClose="isModalActive = false"
      @onSubmit="createArticle($event)"
    />
  </AppModal>

  <div class="container py-6">
    <section class="is-flex mb-4 is-justify-content-space-between">
      <div class="buttons">
        <button class="button" @click="isModalActive = !isModalActive">
          Adicionar
        </button>
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

    <ArticleTable
      :columns="columns"
      :articles="articles"
      @onDeleteArticle="deleteArticle($event)"
    />

    <AppPagination
      :current-page="pagination.page"
      :total-pages="pagination.totalPages"
      @onPageSelect="goToPage($event)"
    />
  </div>
</template>

<script>
import AppModal from "@/components/base/AppModal.vue";
import ArticleForm from "@/components/ArticleForm.vue";
import ArticleTable from "@/components/ArticleTable.vue";
import AppPagination from "@/components/base/AppPagination.vue";

import ApiResource from "@/resources/ApiResource";

export default {
  name: "Admin",
  components: {
    AppModal,
    ArticleForm,
    ArticleTable,
    AppPagination,
  },
  data() {
    return {
      columns: [],
      articles: [],
      pagination: {},
      searchString: "",
      isModalActive: false,
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
    createArticle(data) {
      ApiResource.addNewArticle(data)
        .then((res) => {
          alert(JSON.stringify(res));
        })
        .catch((err) => {
          alert(err);
        })
        .finally(() => {
          this.isModalActive = false;
        });
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

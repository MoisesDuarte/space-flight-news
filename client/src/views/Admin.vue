<template>
  <AppModal v-if="isModalActive" @onClose="isModalActive = false">
    <template #title> Novo Artigo </template>
    <ArticleForm
      :article="currentArticle"
      @onClose="onModalClose"
      @onSubmit="isEditMode ? editArticle($event) : createArticle($event)"
    />
  </AppModal>

  <div class="container py-6">
    <transition name="fade">
      <div
        v-if="isNotificationVisible"
        class="notification"
        :class="notification.type"
      >
        {{ notification.text }}
      </div>
    </transition>

    <section class="is-flex mb-4 is-justify-content-space-between">
      <div class="buttons">
        <button class="button" @click="onOpenAddModal">
          <fa-icon class="mr-2" icon="plus-circle"></fa-icon> Adicionar
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
            <fa-icon :icon="['fas', 'search']"></fa-icon>
          </a>
        </div>
      </div>
    </section>

    <ArticleTable
      :columns="columns"
      :articles="articles"
      @onDeleteArticle="removeArticle($event)"
      @onEditArticle="onOpenEditModal($event)"
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
      currentArticle: {},
      isModalActive: false,
      isEditMode: false,
      isNotificationVisible: false,
      notification: "",
    };
  },
  methods: {
    fetchArticles(page, limit, title = null) {
      ApiResource.getArticles(page, limit, title, "desc").then(
        ({ articles, pagination }) => {
          this.articles = articles;
          this.pagination = pagination;
          this.columns = Object.keys(articles[0]);
        }
      );
    },
    createArticle(data) {
      ApiResource.addNewArticle(data)
        .then(() => {
          this.triggerNotification(
            "Novo artigo cadastrado com sucesso!",
            "is-success"
          );
          this.fetchArticles(0, 10);
        })
        .catch(() => {
          this.triggerNotification("Erro ao cadastrar artigo!", "is-danger");
        })
        .finally(() => {
          this.isModalActive = false;
        });
    },
    editArticle(data) {
      ApiResource.updateArticle(data._id, data)
        .then(() => {
          this.triggerNotification("Artigo editado com sucesso!", "is-success");
        })
        .catch(() => {
          this.triggerNotification("Erro ao editar artigo!", "is-danger");
        })
        .finally(() => {
          this.currentArticle = {};
          this.isEditMode = false;
          this.isModalActive = false;

          const { page, title } = this.pagination;
          this.fetchArticles(page, 10, title);
        });
    },
    removeArticle(id) {
      ApiResource.deleteArticle(id)
        .then(() => {
          this.fetchArticles(0, 10);
          this.triggerNotification(
            "Remoção efetuada com sucesso!",
            "is-success"
          );
        })
        .catch((err) => {
          this.triggerNotification("Erro ao remover artigo!", "is-danger");
        });
    },
    onOpenAddModal() {
      this.currentArticle = {
        publishedAt: new Date().toISOString(),
      };

      this.isModalActive = true;
    },
    onOpenEditModal(article) {
      this.currentArticle = article;
      this.isEditMode = true;
      this.isModalActive = true;
    },
    onModalClose() {
      this.isModalActive = false;
      this.isEditMode = false;
      this.currentArticle = {};
    },
    onSearch() {
      this.fetchArticles(0, 10, this.searchString);
    },
    goToPage(page) {
      this.fetchArticles(page, 10);
    },
    triggerNotification(text, type) {
      this.notification = { text, type };
      this.isNotificationVisible = true;

      setTimeout(() => {
        this.isNotificationVisible = false;
      }, 3000);
    },
  },
  created() {
    this.fetchArticles(0, 10);
  },
};
</script>

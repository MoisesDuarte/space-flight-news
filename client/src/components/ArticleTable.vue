<template>
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
              @click="onDeleteArticle(article._id)"
            >
              Remover
            </button>
            <button
              class="button is-info is-small"
              @click="onEditArticle(article)"
            >
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ArticleTable",
  props: {
    columns: {
      type: Array,
      default: [],
    },
    articles: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onDeleteArticle(id) {
      this.$emit("onDeleteArticle", id);
    },
    onEditArticle(article) {
      this.$emit("onEditArticle", article);
    },
  },
};
</script>

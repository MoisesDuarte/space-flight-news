<template>
  <form ref="articleForm" @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Featured</label>
      <div class="control">
        <div class="select">
          <select v-model="article.featured">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="article.title"
          class="input"
          type="text"
          name="title"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Url</label>
      <div class="control">
        <input
          v-model="article.url"
          class="input"
          type="text"
          name="url"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Image Url</label>
      <div class="control">
        <input
          v-model="article.imageUrl"
          class="input"
          type="text"
          name="imageUrl"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">News Site</label>
      <div class="control">
        <input
          v-model="article.newsSite"
          class="input"
          type="text"
          name="newsSite"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Summary</label>
      <div class="control">
        <textarea
          v-model="article.summary"
          class="textarea"
          name="summary"
          required
        ></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Published at</label>
      <div class="control">
        <input
          v-model="article.publishedAt"
          class="input"
          type="text"
          name="publishedAt"
          required
        />
      </div>
    </div>

    <div class="buttons is-right">
      <button class="button is-danger" @click="onCancel">Cancelar</button>
      <button type="submit" class="button is-info">Confirmar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ArticleForm",
  props: {
    article: {
      type: Object,
      default: {},
    },
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.article);
    },
    onCancel() {
      this.$emit("onClose");
    },
  },
};
</script>

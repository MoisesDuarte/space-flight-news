<template>
  <form ref="articleForm" @submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Featured</label>
      <div class="control">
        <div class="select">
          <select v-model="featured">
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
          v-model="title"
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
        <input v-model="url" class="input" type="text" name="url" required />
      </div>
    </div>

    <div class="field">
      <label class="label">Image Url</label>
      <div class="control">
        <input
          v-model="imageUrl"
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
          v-model="newsSite"
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
          v-model="summary"
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
          v-model="publishedAt"
          class="input"
          type="date"
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
  data() {
    return {
      featured: false,
      title: null,
      url: null,
      imageUrl: null,
      newsSite: null,
      summary: null,
      publishedAt: null,
    };
  },
  methods: {
    onSubmit() {
      const data = {
        featured: this.featured,
        title: this.title,
        url: this.url,
        imageUrl: this.imageUrl,
        newsSite: this.newsSite,
        summary: this.summary,
        publishedAt: new Date(this.publishedAt).toISOString(),
      };

      this.$emit("onSubmit", data);
    },
    onCancel() {
      this.$emit("onClose");
    },
  },
};
</script>

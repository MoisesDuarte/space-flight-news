<template>
  <div class="columns has-text-left">
    <div class="column">
      <figure class="image is-3by2">
        <img style="border-radius: 10px" :src="information.imageUrl" />
      </figure>
    </div>
    <div class="column">
      <h2 class="is-size-4 has-text-weight-bold">
        {{ information.title }}
      </h2>
      <div class="is-flex is-justify-content-space-between mb-1">
        <time>{{ formatISODate(information.publishedAt) }}</time>
        <span class="tag is-link">
          {{ information.newsSite }}
        </span>
      </div>
      <p class="has-text-weight-medium mb-2">
        {{ information.summary }}
      </p>
      <a class="button is-primary" :href="information.url" target="__blank"
        >Ver mais</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    information: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatISODate(date) {
      const _date = new Date(date);
      return `${_date.getDate()}/${_date.getMonth()}/${_date.getFullYear()}`;
    },
  },
};
</script>

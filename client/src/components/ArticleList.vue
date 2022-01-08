<template>
  <section class="article-list mb-4">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="article._id"
          :information="article"
          :class="{ 'is-flex-direction-row-reverse': index & 1 }"
          class="mb-6"
        />
        <progress
          v-if="loading"
          class="progress is-large is-link"
          max="100"
        ></progress>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "ArticleList",
  props: {
    articles: {
      type: Array,
      default: [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ArticleCard,
  },
};
</script>

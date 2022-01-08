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
  },
  components: {
    ArticleCard,
  },
};
</script>

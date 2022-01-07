<template>
  <section class="article-list mb-4">
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <ArticleCard />
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "ArticleList",
  components: {
    ArticleCard,
  },
};
</script>

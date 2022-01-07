<template>
  <div class="article-card has-text-left">
    <div class="columns">
      <div class="column">
        <figure class="image is-3by2">
          <img src="https://bulma.io/images/placeholders/480x320.png" />
        </figure>
      </div>
      <div class="column">
        <h2 class="is-size-4 has-text-weight-bold">
          Tenete ergo quod si servitus
        </h2>
        <div class="is-flex is-justify-content-space-between mb-1">
          <time>dd/mm/yyyy</time>
          <span class="tag is-dark"> newsSite </span>
        </div>
        <p class="has-text-weight-medium mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod
          quasi explicabo eaque accusantium dicta tenetur doloremque vitae aut
          repellendus nemo veritatis, molestias ipsam nihil ea odio assumenda
          voluptatem aperiam.
        </p>
        <button class="button is-primary">Ver mais</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
};
</script>

<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-for="(page, index) in totalPages">
        <a
          class="pagination-link"
          :class="{ 'is-current': currentPage == index }"
          @click="onPageSelect(index)"
          >{{ index + 1 }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onPageSelect(index) {
      this.$emit("onPageSelect", index);
    },
  },
};
</script>

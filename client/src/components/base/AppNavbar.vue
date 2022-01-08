<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item is-flex-mobile">
          <!-- ? Search input -->
          <div class="field has-addons mb-0 mr-2">
            <div class="control">
              <input
                v-model="searchString"
                class="input"
                type="text"
                placeholder="Search"
                @keydown.native.enter="onSearch"
              />
            </div>
            <div class="control">
              <a role="button" class="button is-info" @click="onSearch"> L </a>
            </div>
          </div>

          <div class="select">
            <select v-model="sortValue" @change="onSort()">
              <option value="desc">Mais antigas</option>
              <option value="asc">Mais novas</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      searchString: "",
      sortValue: "asc",
    };
  },
  methods: {
    onSearch() {
      this.$emit("onSearch", this.searchString);
    },
    onSort() {
      this.$emit("onSort", this.sortValue);
    },
  },
};
</script>

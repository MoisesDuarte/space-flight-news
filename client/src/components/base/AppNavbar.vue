<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item is-flex-mobile">
          <!-- ? Search input -->
          <div class="field has-addons mb-0 mr-2">
            <div class="control">
              <input
                v-model="searchInput"
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
            <select>
              <option>Mais antigas</option>
              <option>Mais novas</option>
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
    };
  },
  methods: {
    onSearch() {
      this.$emit("onSearch", this.searchInput);
    },
  },
};
</script>

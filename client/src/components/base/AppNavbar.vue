<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item is-flex-mobile">
          <input class="input mr-2" type="text" placeholder="Search" />
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
};
</script>

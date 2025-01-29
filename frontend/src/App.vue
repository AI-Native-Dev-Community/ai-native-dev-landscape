<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="menu">
      <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Landscape</RouterLink> |
            <RouterLink to="/catalog">Catalog</RouterLink> |
            <RouterLink to="/awesome">Awesome</RouterLink> |
            <RouterLink to="/search">Search</RouterLink>
          </nav>
        </div>
      </header>
    </div>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

.content {
  width: 100%;
  margin-left: 0; /* Ensure no left margin */
  margin-right: 0; /* Ensure no right margin */
  max-width: none;
}
</style>

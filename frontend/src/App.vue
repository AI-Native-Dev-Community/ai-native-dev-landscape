<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <div class="menu">
      <header>
        <div class="menu-content">
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

.menu {
  width: 100%;
  height: 50px;
}

.menu nav a {
  color: purple;
  text-decoration: none;
}

.menu nav a:hover {
  text-decoration: underline;
}

.menu nav a.router-link-active {
  font-weight: bold;
}


.menu-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  margin-left: 0; /* Ensure no left margin */
  margin-right: 0; /* Ensure no right margin */
  max-width: none;
}
</style>

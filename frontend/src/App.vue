<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Landscape</RouterLink> |
        <RouterLink to="/catalog">Catalog</RouterLink> |
        <RouterLink to="/awesome">Awesome</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>

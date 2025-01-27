<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LandscapeCanvas from './components/LandscapeCanvas.vue'

</script>

<template>
  <header>
    <div class="wrapper">
      <LandscapeCanvas />

      <nav>
        <RouterLink to="/">Landscape</RouterLink> |
        <RouterLink to="/list">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Landscape from './components/Landscape.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Landscape msg="Hello Landscape" />

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

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LandscapeCanvas from './components/LandscapeCanvas.vue'
import { useToolLandscapeStore } from './stores/toolLandscape'

const toolLandscapeStore = useToolLandscapeStore();
toolLandscapeStore.initializeFromYaml();

const toolDomains = toolLandscapeStore.getAllDomains;

</script>

<template>
  <header>
    <div class="wrapper">
      <LandscapeCanvas :domains="toolDomains"  />

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

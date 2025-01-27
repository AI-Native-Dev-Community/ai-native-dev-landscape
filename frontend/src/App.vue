<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Landscape from './components/Landscape.vue'
import { useToolLandscapeStore } from './stores/toolLandscape'

const toolLandscapeStore = useToolLandscapeStore();
toolLandscapeStore.addDomain({
    uid: "tool-1",
    name: "Development Tools",
    description: "Tools used for software development",
    level: 1
});

const toolDomains = toolLandscapeStore.getAllDomains;

</script>

<template>
  <header>
    <div class="wrapper">
      <Landscape :domains="toolDomains"  />

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

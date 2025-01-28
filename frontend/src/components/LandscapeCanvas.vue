<script setup lang="ts">
import LandscapeDomain from './LandscapeDomain.vue'
import { useToolLandscapeStore } from '../stores/toolLandscape'

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore()
const domains = toolLandscapeStore.getAllDomains

// const locale = navigator.language
</script>

<template>
  <div class="landscape-canvas">
    <LandscapeDomain v-for="domain in domains" :key="domain.uid" :domain="domain" />
  </div>
</template>

<style scoped>
.landscape-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

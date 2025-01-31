<script setup lang="ts">
import LandscapeDomain from './LandscapeDomain.vue'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore()
const domains = toolLandscapeStore.getAllDomains

// Group domains by level and sort levels
const domainsByLevel = computed(() => {
  const grouped = domains.reduce(
    (acc, domain) => {
      const level = domain.level || 0
      if (!acc[level]) {
        acc[level] = []
      }
      acc[level].push(domain)
      return acc
    },
    {} as Record<number, typeof domains>,
  )

  // Convert to array of arrays, sorted by level
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  return Object.entries(grouped)
    .sort(([levelA], [levelB]) => Number(levelA) - Number(levelB))
    .map(([_, domains]) => domains)
})

// const locale = navigator.language
</script>

<template>
  <div class="landscape-canvas">
    <div v-for="(levelDomains, index) in domainsByLevel" :key="index" class="domain-row">
      <LandscapeDomain v-for="domain in levelDomains" :key="domain.uid" :domain="domain" :index="index" />
    </div>
  </div>
</template>

<style scoped>
.landscape-canvas {
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  gap: 1rem;
}



</style>

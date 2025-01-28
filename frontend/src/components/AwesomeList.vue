<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore()
const domains = toolLandscapeStore.getAllDomains

// Create a computed function to get categories for a domain
const getCategoriesForDomain = computed(() => {
  return (domainId: string) => toolLandscapeStore.getCategoriesByDomainId(domainId)
})

const getToolsForCategory = computed(() => {
  return (categoryId: string) => toolLandscapeStore.getToolsByCategoryId(categoryId)
})
</script>

<template>
  <div v-for="domain in domains" :key="domain.uid">
    <h2>{{ domain.name }}</h2>
    <!-- Domain header -->
    <div v-for="category in getCategoriesForDomain(domain.uid)" :key="category.uid">
      <h3>{{ category.name }}</h3>
      <!-- Category header -->
      <ul>
        <li v-for="tool in getToolsForCategory(category.uid)" :key="tool.uid">
          <!-- Render each tool here -->
          {{ tool.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

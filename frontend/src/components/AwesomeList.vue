<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'
import benchIcon from '@/assets/tool-icon.png'
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

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = benchIcon; // Set to benchIcon if the image fails to load
}

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
          <div class="catalog-tool">  
            <img 
              :src="tool.icon_url || benchIcon" 
              @error="onImageError"
              alt="tool.name" 
              class="catalog-tool-icon" 
            />
            <a :href="tool.website_url" target="_blank">{{ tool.name }}</a> : {{ tool.description }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.catalog-tool-icon {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
}

.catalog-tool {
  display: flex;
  align-items: center;
  padding: 0.2rem
}
</style>


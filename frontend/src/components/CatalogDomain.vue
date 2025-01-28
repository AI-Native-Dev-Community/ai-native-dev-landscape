<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import type { ToolDomain } from '../types/ToolTypes'
import CatalogCategory from '@/components/CatalogCategory.vue'

const props = defineProps<{
  domain: ToolDomain
}>()

const toolLandscapeStore = useToolLandscapeStore()
const categories = toolLandscapeStore.getCategoriesByDomainId(props.domain.uid)
</script>

<template>
  <div class="catalog-domain">
    <div class="catalog-domain-header"> 
      <h3>{{ domain.name.en }}</h3>
      <p>{{ domain.description.en }}</p>
    </div>
    <div class="catalog-domain-categories">
      <CatalogCategory v-for="category in categories" :key="category.uid" :category="category" />
    </div>
  </div>
</template>

<style scoped>
.catalog-domain {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
}

.catalog-domain-header {
  padding: 1rem;
}
</style>

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
      {{ domain.name }}
      <p>{{ domain.description }}</p>
    </div>
    <div class="catalog-domain-categories">
      <CatalogCategory v-for="category in categories" :key="category.uid" :category="category" />
    </div>
  </div>
</template>

<style scoped>
.catalog-domain {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
  width: 100%;
}

.catalog-domain-header {
  padding: 1rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-weight: bold;
  text-align: center;
}

.catalog-domain-categories {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
}
</style>

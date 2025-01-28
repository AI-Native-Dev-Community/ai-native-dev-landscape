<script setup lang="ts">
import type { ToolCategory } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'
import CatalogTool from '@/components/CatalogTool.vue'

const props = defineProps<{
  category: ToolCategory
}>()

// get tools from the store
const toolLandscapeStore = useToolLandscapeStore()
const tools = computed(() => toolLandscapeStore.getToolsByCategoryId(props.category.uid))
</script>

<template>
  <div class="catalog-category">
    <div class="catalog-category-header">
      <h3>{{ category.name }}</h3>
      <p>{{ category.description }}</p>
    </div>
    <div class="catalog-category-tools">
      <CatalogTool v-for="tool in tools" :key="tool.uid" :tool="tool" />
    </div>
  </div>
</template>

<style scoped>
.catalog-category {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
}

.catalog-category-header {
  padding: 1rem;
}

.catalog-category-tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
}

.catalog-tool {
  flex: 0 1 200px;
  margin: 0.5rem;
}
</style>

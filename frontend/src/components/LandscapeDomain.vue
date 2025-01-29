<script setup lang="ts">
import type { ToolDomain } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import LandscapeCategory from '@/components/LandscapeCategory.vue'

const props = defineProps<{
  domain: ToolDomain
  index: number
}>()

const colorPool = [
  '#007bff',  // Blue
  '#28a745',  // Green
  '#dc3545',  // Red
  '#ffc107',  // Yellow
  '#6f42c1',  // Purple
  '#e83e8c',  // Pink
  '#17a2b8',  // Teal
  '#6f42c1',  // Lavender
  '#fd7e14',  // Orange
  '#20c997',  // Mint
  '#f8d7da',  // Light Rose
  '#c3e6cb',  // Light Green
  '#d1ecf1',  // Light Cyan
  '#fff3cd',  // Light Yellow
  '#e2e3e5',  // Light Gray
  '#f8d7da',  // Light Coral
  '#cce5ff',  // Light Blue
  '#ffeeba',  // Light Yellow
  '#d4edda',  // Light Green
  '#f1f1f1'   // Light Gray
]

const toolLandscapeStore = useToolLandscapeStore()
const categories = toolLandscapeStore.getCategoriesByDomainId(props.domain.uid)

const backgroundColor = colorPool[props.index % colorPool.length]
</script>

<template>
  <div class="landscape-domain" :style="{ backgroundColor }">
    <div class="domain-header">
      <h2>{{ domain.name }}</h2>
    </div>
    <div class="categories-container">
      <LandscapeCategory v-for="category in categories" :key="category.uid" :category="category" />
    </div>
  </div>
</template>

<style scoped>
.landscape-domain {
  width: 100%;
  height: auto;

  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
}

.domain-header {
  text-align: center;
}

.domain-header h2 {
  margin: 0 0 0.5rem 0;
}

.domain-header p {
  margin: 0;
  color: #666;
}

.categories-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex: 1;
}
</style>

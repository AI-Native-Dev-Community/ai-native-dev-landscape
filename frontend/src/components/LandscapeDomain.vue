<script setup lang="ts">
import type { ToolDomain } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import LandscapeCategory from '@/components/LandscapeCategory.vue'

const props = defineProps<{
  domain: ToolDomain
  index: number
}>()

// Function to generate HSL colors with good contrast
const generateColor = (index: number, total: number): string => {
  // Use golden ratio for even color distribution
  const goldenRatio = 0.618033988749895
  
  // Calculate hue using golden ratio
  const hue = (index * goldenRatio * 360) % 360
  
  // Keep saturation and lightness constant for pastel colors
  const saturation = 85
  const lightness = 90
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

const colorPool = [

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

const backgroundColor = generateColor(props.index, colorPool.length)
//const backgroundColor = colorPool[props.index % colorPool.length]
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
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  padding: 1rem;
}

.domain-header {
  text-align: center;
  margin-top: 0.2rem;
}

.domain-header h2 {
  margin: 0 0 0.5rem 0;
}

.domain-header p {
  margin: 0;
  color: #666;
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: stretch;
}
</style>

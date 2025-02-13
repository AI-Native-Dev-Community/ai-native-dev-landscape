<script setup lang="ts">
import type { ToolDomain } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import LandscapeCategory from '@/components/LandscapeCategory.vue'
import { computed } from 'vue'

const props = defineProps<{
  domain: ToolDomain
  index: number
}>()

// Function to generate HSL colors with good contrast
const generateColor = (index: number): string => {
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
  '#f8d7da', // Light Rose
  '#c3e6cb', // Light Green
  '#d1ecf1', // Light Cyan
  '#fff3cd', // Light Yellow
  '#e2e3e5', // Light Gray
  '#f8d7da', // Light Coral
  '#cce5ff', // Light Blue
  '#ffeeba', // Light Yellow
  '#d4edda', // Light Green
  '#f1f1f1', // Light Gray
]

const toolLandscapeStore = useToolLandscapeStore()
const categories = toolLandscapeStore.getCategoriesByDomainId(props.domain.uid)
const selectedTag = computed(() => toolLandscapeStore.getSelectedTag)

const backgroundColor = generateColor(props.index)
//const backgroundColor = colorPool[props.index % colorPool.length]

const isToolHighlighted = (tool: Tool) => {
  if (!selectedTag.value) return true
  return tool.tags?.includes(selectedTag.value) ?? false
}
</script>

<template>
  <div class="landscape-domain" :style="{ backgroundColor }">
    <div class="domain-header">
      <h2 class="domain-title">{{ domain.name }}</h2>
      <div class="domain-tooltip">
        {{ domain.description }}
      </div>
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

.domain-title {
  position: relative;
  cursor: help;
  display: inline-block;
}

.domain-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  width: max-content;
  max-width: 300px;
  z-index: 1000;
  margin-top: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: left;
}

/* Add arrow to tooltip */
.domain-tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent;
}

.domain-title:hover + .domain-tooltip,
.domain-tooltip:hover {
  display: block;
}

.tool-dimmed {
  opacity: 0.3;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.tool-item {
  transition: all 0.3s ease;
}
</style>

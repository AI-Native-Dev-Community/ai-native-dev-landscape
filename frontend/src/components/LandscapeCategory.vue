<script setup lang="ts">
import type { ToolCategory } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'
import LandscapeTool from '@/components/LandscapeTool.vue'

const props = defineProps<{
  category: ToolCategory
}>()

// get tools from the store
const toolLandscapeStore = useToolLandscapeStore()
const tools = computed(() => toolLandscapeStore.getToolsByCategoryId(props.category.uid))
</script>

<template>
  <div class="landscape-category">
    <div class="landscape-category-header">
      <div class="category-title">{{ category.name }}</div>
      <div class="category-tooltip">
        {{ category.description }}
      </div>
    </div>
    <div class="landscape-category-tools">
      <LandscapeTool v-for="tool in tools" :key="tool.uid" :tool="tool" />
    </div>
  </div>
</template>

<style scoped>
.landscape-category {
  border: 1px solid #ccc;
  padding: 0.25em;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1); /* Set a transparent dark background */
}

.landscape-category-header {
  position: relative;
  text-align: center;
  padding: 1rem;
}

.category-title {
  font-size: 1.2rem;
  font-weight: bold;
  cursor: help;
  display: inline-block;
}

.category-tooltip {
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
  max-width: 250px;
  z-index: 1000;
  margin-top: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: left;
}

/* Add arrow to tooltip */
.category-tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent;
}

.category-title:hover + .category-tooltip,
.category-tooltip:hover {
  display: block;
}

.landscape-category-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  padding: 0.25em;
  gap: 0.25em;
  justify-content: center;
}
</style>

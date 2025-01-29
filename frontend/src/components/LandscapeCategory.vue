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
      <h3>{{ category.name }}</h3>
    </div>
    <div class="landscape-category-tools">
      <LandscapeTool v-for="tool in tools" :key="tool.uid" :tool="tool" />
    </div>
  </div>
</template>


<style scoped>
.landscape-category {
  height: auto; /* Set the height to 100% of the parent container */
  display: flex; /* Use flexbox to align items if needed */
  flex-direction: column; /* Align children vertically */
  border: 1px solid #ccc;
  margin-bottom: 0.2em;
  border-radius: 8px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Set a transparent dark background */
}

.landscape-category-header {
  padding: 0.5rem;
  color:white;
}

.landscape-category-tools {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
}
</style>

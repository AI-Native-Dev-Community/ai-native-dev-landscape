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
    {{ category.name.en }}
    {{ category.description.en }}

    <LandscapeTool v-for="tool in tools" :key="tool.uid" :tool="tool" />
  </div>
</template>

<style scoped>
.landscape-category {
  height: auto; /* Set the height to 100% of the parent container */
  display: flex; /* Use flexbox to align items if needed */
  flex-direction: column; /* Align children vertically */
}

.categories-container {
  display: flex; /* Ensure categories are in a row */
  flex-direction: row; /* Align categories horizontally */
  align-items: stretch; /* Make all categories stretch to the height of the tallest one */
}
</style>

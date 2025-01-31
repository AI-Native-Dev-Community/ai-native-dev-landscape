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
      {{ category.name }}
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
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.landscape-category-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  padding: 0.25em;
  gap: 0.25em;
  justify-content: center;
}


</style>

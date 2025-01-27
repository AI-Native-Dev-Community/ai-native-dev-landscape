<script setup lang="ts">
import type { ToolCategory } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'
const props = defineProps<{
  category: ToolCategory
}>()

// get tools from the store
const toolLandscapeStore = useToolLandscapeStore()
const tools = computed(() => toolLandscapeStore.getToolsByCategoryId(props.category.uid))
</script>

<template>
  <div class="tool-category">
    {{ category.name.en }}
    {{ category.description.en }}

    <LandscapeTool v-for="tool in tools" :key="tool.uid" :tool="tool" />
  </div>
</template>

<style scoped></style>

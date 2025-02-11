<script setup lang="ts">
import type { Tool } from '../types/ToolTypes'
import benchIcon from '@/assets/tool-icon.png'

defineProps<{
  tool: Tool
}>()

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = benchIcon // Set to benchIcon if the image fails to load
}
</script>

<template>
  <div class="catalog-tool" :title="tool.description">
    <div class="catalog-tool-header">
      <img
        :src="tool.icon_url || benchIcon"
        @error="onImageError"
        alt="tool.name"
        class="catalog-tool-icon"
      />
      {{ tool.name }} : {{ tool.description }}
    </div>
  </div>
</template>

<style scoped>
.catalog-tool {
  padding: 1.5rem;
  min-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
}

.catalog-tool-header {
  display: flex;
  align-items: top;
}

.catalog-tool-icon {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
}
</style>

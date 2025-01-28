<script setup lang="ts">
import type { Tool } from '../types/ToolTypes'

defineProps<{
  tool: Tool
}>()
</script>

<template>
  <div class="catalog-tool" :title="tool.description">
    <div class="catalog-tool-header">
      <h3>{{ tool.name }}</h3>
      <a v-if="tool.website_url" :href="tool.website_url" target="_blank" rel="noopener noreferrer">
        🔗
      </a>
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
</style>

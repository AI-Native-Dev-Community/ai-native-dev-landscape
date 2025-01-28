<script setup lang="ts">
import type { Tool } from '../types/ToolTypes'

defineProps<{
  tool: Tool
}>()

</script>

<template>
  <div 
    class="catalog-tool" 
    :title="tool.description.en"
  >
    <div class="catalog-tool-header">
      <h3>{{ tool.name.en }}</h3>
      <a 
        v-if="tool.website_url" 
        :href="tool.website_url" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        🔗
      </a>
    </div>

  </div>
</template>

<style scoped>
.catalog-tool {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  min-width: 300px;
}
</style> 

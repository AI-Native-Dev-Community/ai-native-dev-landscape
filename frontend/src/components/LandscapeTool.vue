<script setup lang="ts">
import type { Tool } from '../types/ToolTypes'

defineProps<{
  tool: Tool
}>()

</script>

<template>
  <div 
    class="landscape-tool" 
    :title="tool.description.en"
  >
    <div class="tool-header">
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
.landscape-tool {

  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style> 
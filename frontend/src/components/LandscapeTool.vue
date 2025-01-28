<script setup lang="ts">
import type { Tool } from '../types/ToolTypes'

defineProps<{
  tool: Tool
}>()
</script>

<template>
  <div class="landscape-tool" :title="tool.description">
    <div class="landscape-tool-header">
      <img 
        class="landscape-tool-icon" 
        :src="tool.icon_url ? tool.icon_url : 'https://placehold.co/48x48'" 
        alt="Tool Icon" 
      /> 
      <div class="landscape-tool-name"> {{ tool.name }} </div>
    </div>
  </div>
</template>

<style scoped>

.landscape-tool-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.landscape-tool {
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
}

.landscape-tool-header {
  padding: 1.5rem;
}

.landscape-tool-name {
  font-size: 12px;
  font-weight: bold;
} 
</style>

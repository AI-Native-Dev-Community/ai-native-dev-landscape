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

const openToolWebsite = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="landscape-tool" @click="openToolWebsite(tool.website_url)">
    <div class="landscape-tool-header">
      <img
        class="landscape-tool-icon"
        :src="tool.icon_url || benchIcon"
        @error="onImageError"
        :alt="tool.name"
      />
      <div class="landscape-tool-name">{{ tool.name }}</div>
    </div>
    <div class="landscape-tool-description">
      {{ tool.description }}
    </div>
  </div>
</template>

<style scoped>
.landscape-tool {
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  margin: 0.3em;
  cursor: pointer;
  position: relative;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.landscape-tool:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.landscape-tool-header {
  padding: 0.25rem;
  text-align: center;
}

.landscape-tool-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.landscape-tool-name {
  font-size: 10px;
  font-weight: bold;
}

.landscape-tool-description {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  width: 200px;
  z-index: 1000;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Add arrow to tooltip */
.landscape-tool-description::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.landscape-tool:hover .landscape-tool-description {
  display: block;
}
</style>

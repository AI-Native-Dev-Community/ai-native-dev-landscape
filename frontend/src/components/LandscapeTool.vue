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
    <div class="landscape-tool-tooltip">
      <div class="tooltip-description">{{ tool.description }}</div>
      <div v-if="tool.tags?.length" class="tooltip-tags">
        <span v-for="tag in tool.tags" :key="tag" class="tooltip-tag">
          {{ tag }}
        </span>
      </div>
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

.landscape-tool-tooltip {
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

.tooltip-description {
  margin-bottom: 8px;
}

.tooltip-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.tooltip-tag {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  white-space: nowrap;
}

/* Add arrow to tooltip */
.landscape-tool-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.landscape-tool:hover .landscape-tool-tooltip {
  display: block;
}
</style>

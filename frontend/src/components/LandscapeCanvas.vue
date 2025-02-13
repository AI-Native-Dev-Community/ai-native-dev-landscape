<script setup lang="ts">
import LandscapeDomain from './LandscapeDomain.vue'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { computed } from 'vue'

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore()
const domains = toolLandscapeStore.getAllDomains

// Add console log to debug
console.log('Domains:', domains)

// Get all unique tags from all domains
const allTags = computed(() => toolLandscapeStore.getAllTags)
const selectedTag = computed(() => toolLandscapeStore.getSelectedTag)

const handleTagClick = (tag: string) => {
  if (selectedTag.value === tag) {
    toolLandscapeStore.setSelectedTag(null) // Deselect if clicking the same tag
  } else {
    toolLandscapeStore.setSelectedTag(tag)
  }
}

// Group domains by level and sort levels
const domainsByLevel = computed(() => {
  const grouped = domains.reduce(
    (acc, domain) => {
      const level = domain.level || 0
      if (!acc[level]) {
        acc[level] = []
      }
      acc[level].push(domain)
      return acc
    },
    {} as Record<number, typeof domains>,
  )

  // Convert to array of arrays, sorted by level
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  return Object.entries(grouped)
    .sort(([levelA], [levelB]) => Number(levelA) - Number(levelB))
    .map(([_, domains]) => domains)
})

// const locale = navigator.language
</script>

<template>
  <div class="landscape-container">
    <div class="tags-container">
      <span
        v-for="tag in allTags"
        :key="tag"
        class="tag"
        :class="{ 'tag-selected': selectedTag === tag }"
        @click="handleTagClick(tag)"
      >
        {{ tag }}
      </span>
    </div>
    <div class="landscape-canvas">
      <div v-for="(levelDomains, index) in domainsByLevel" :key="index" class="domain-row">
        <LandscapeDomain
          v-for="domain in levelDomains"
          :key="domain.uid"
          :domain="domain"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.landscape-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 4px;
}

.tag {
  background: #e0e0e0;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag:hover {
  background: #d0d0d0;
}

.tag-selected {
  background: #4a5568;
  color: white;
}

.landscape-canvas {
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  gap: 1rem;
}
</style>

<script setup lang="ts">
import type { ToolDomain } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape'
import LandscapeCategory from '@/components/LandscapeCategory.vue' 

const props = defineProps<{
  domain: ToolDomain
}>()

const toolLandscapeStore = useToolLandscapeStore()
const categories = toolLandscapeStore.getCategoriesByDomainId(props.domain.uid)
</script>

<template>
  <div class="landscape-domain">
    <div class="domain-header">
      <h2>{{ domain.name.en }}</h2>
      <p>{{ domain.description.en }}</p>
    </div>
    <div class="categories-container">
      <LandscapeCategory v-for="category in categories" 
                         :key="category.uid" 
                         :category="category" />
    </div>
  </div>
</template>

<style scoped>
.landscape-domain {
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.domain-header {
  text-align: center;
}

.domain-header h2 {
  margin: 0 0 0.5rem 0;
}

.domain-header p {
  margin: 0;
  color: #666;
}

.categories-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}
</style>

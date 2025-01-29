<template>
  <div class="tool-detail" v-if="tool">
    <h1>{{ tool.name }}</h1>
    <div class="tool-metadata">
      <span class="category-tag">{{ getCategoryName(tool.categoryId) }}</span>
      <span class="domain-tag">{{ getDomainName(tool.domainId) }}</span>
    </div>
    <p class="description">{{ tool.description }}</p>
    
    <div class="links" v-if="tool.website_url">
      <a :href="tool.website_url" target="_blank" rel="noopener noreferrer" class="tool-link">
        Visit Website →
      </a>
    </div>
  </div>
  <div v-else class="not-found">
    Tool not found
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useToolLandscapeStore } from '../stores/toolLandscape'

const route = useRoute()
const store = useToolLandscapeStore()

const tool = computed(() => store.getToolById(route.params.id as string))

const getCategoryName = (categoryId: string) => {
  const category = store.getCategoryById(categoryId)
  return category?.name || 'Uncategorized'
}

const getDomainName = (domainId: string) => {
  const domain = store.getDomainById(domainId)
  return domain?.name || 'Unknown Domain'
}
</script>

<style scoped>
.tool-detail {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.tool-metadata {
  margin: 20px 0;
}

.category-tag, .domain-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  margin-right: 10px;
  font-size: 14px;
}

.category-tag {
  background: #e9ecef;
  color: #495057;
}

.domain-tag {
  background: #dee2e6;
  color: #495057;
}

.description {
  line-height: 1.6;
  margin: 20px 0;
}

.tool-link {
  display: inline-block;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.tool-link:hover {
  background: #0056b3;
}

.not-found {
  text-align: center;
  padding: 40px;
  color: #666;
}
</style> 
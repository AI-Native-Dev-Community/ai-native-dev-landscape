<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search tools..."
      class="search-input"
      @input="updateSearch"
    >
    
    <div class="tools-grid">
      <div 
        v-for="tool in filteredTools" 
        :key="tool.uid" 
        class="tool-card"
        @click="navigateToTool(tool.uid)"
      >

      <img 
              :src="tool.icon_url || benchIcon" 
              @error="onImageError"
              alt="tool.name" 
              class="catalog-tool-icon" 
            />

        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <span class="category">{{ getCategoryName(tool.categoryId) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import benchIcon from '@/assets/tool-icon.png'
const router = useRouter()
const store = useToolLandscapeStore()
const searchQuery = ref('')

const filteredTools = computed(() => store.filteredTools)

const updateSearch = () => {
  store.setSearchQuery(searchQuery.value)
}

const getCategoryName = (categoryId: string) => {
  const category = store.getCategoryById(categoryId)
  return category?.name || 'Uncategorized'
}

const navigateToTool = (toolId: string) => {
  router.push(`/tool/${toolId}`)
}

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = benchIcon; // Set to benchIcon if the image fails to load
}
</script>

<style scoped>
.search-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}


.catalog-tool-icon {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  color: green;
}

.tool-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: lightgreen;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category {
  display: inline-block;
  padding: 4px 8px;
  background: #ca0404;
  border-radius: 4px;
  font-size: 14px;
}
</style> 
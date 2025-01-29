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
      <div v-for="tool in filteredTools" :key="tool.id" class="tool-card">
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <span class="category">{{ tool.category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import { ref, computed } from 'vue'

const store = useToolLandscapeStore()
const searchQuery = ref('')

const filteredTools = computed(() => store.filteredTools)

const updateSearch = () => {
  store.setSearchQuery(searchQuery.value)
}
</script>

<style scoped>
.search-container {
  padding: 20px;
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

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.tool-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: blue;
}

.category {
  display: inline-block;
  padding: 4px 8px;
  background: #eee;
  border-radius: 4px;
  font-size: 14px;
}
</style> 
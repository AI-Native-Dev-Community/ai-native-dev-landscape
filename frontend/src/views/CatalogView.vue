<template>
  <div class="search-container">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search tools..."
      class="search-input"
      @input="updateSearch"
    />

    <div class="tools-grid">
      <div
        v-for="tool in filteredTools"
        :key="tool.uid"
        class="tool-card"
        @click="navigateToTool(tool.uid)"
      >
        <div class="tool-header" style="text-align: center;">
          <img
            :src="tool.icon_url || benchIcon"
            @error="onImageError"
            alt="tool.name"
            class="catalog-tool-icon"
          />
          <h3 class="tool-title">{{ tool.name }}</h3>
        </div>
        <div class="tool-url" style="text-align: center; margin-top: 5px;">
          <p class="tool-website">{{ tool.website_url }}</p>
        </div>
        <div class="tool-description">
          <p>{{ tool.description }}</p>
        </div>
        <div class="tags">
          <span class="category, tag">{{ getCategoryName(tool.categoryId) }}</span>
          <span class="domain, tag">{{ tool.domainId }} {{ store.getDomainById(store.getCategoryById(tool.categoryId)?.domainId)?.name }}</span>
          <span v-for="tag in tool.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
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
  const tool = store.getToolById(toolId); // Fetch the tool object using its ID
  if (tool && tool.website_url) {
    window.open(tool.website_url, '_blank'); // Open the website URL in a new window
  }
}

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = benchIcon // Set to benchIcon if the image fails to load
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
}

.tool-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tool-description {
  flex-grow: 1;
}

.tag {
  display: inline-block;
  background: lightblue;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 12px;
  color: #00796b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tool-header {
  display: flex;
  align-items: center;
}

.tool-title {
  margin-left: 0.5rem;
}

.tool-website {
  margin-top: 5px;
  margin-left: 0.5rem;
  font-size: 12px;
  color: #666;
}
</style>

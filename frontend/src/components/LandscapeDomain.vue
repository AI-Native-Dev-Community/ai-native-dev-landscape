<script setup lang="ts">
import type { ToolDomain, ToolCategory } from '../types/ToolTypes'
import { useToolLandscapeStore } from '../stores/toolLandscape';
import { computed } from 'vue';

const props = defineProps<{
  domain: ToolDomain
}>()

const toolLandscapeStore = useToolLandscapeStore();
const categories = computed(() => toolLandscapeStore.getCategoriesByDomainId(props.domain.uid));
</script>

<template>
  <div class="tool-domain">  
    {{ domain.name.en }}
    {{ domain.description.en }}
    <ul>
      <li v-for="category in categories" :key="category.uid">{{ category.name.en }}</li>
    </ul>
  </div>
</template>

<style scoped>
.tool-domain {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
}
</style> 
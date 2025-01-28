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
    {{ domain.name.en }}
    {{ domain.description.en }}
    <LandscapeCategory v-for="category in categories" :key="category.uid" :category="category" />
  </div>
</template>

<style scoped>
.landscape-domain {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 1rem;
}
</style>

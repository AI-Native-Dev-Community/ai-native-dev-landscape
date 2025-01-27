<script setup lang="ts">
import { Tool } from '../types/ToolTypes';
import LandscapeDomain from './LandscapeDomain.vue';
import { useToolLandscapeStore } from '../stores/toolLandscape';

defineProps<{

}>()

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore();
const domains = toolLandscapeStore.getAllDomains;

const locale = navigator.language;
</script>

<template>
  <div class="tool-canvas">
    <LandscapeDomain 
      v-for="domain in domains" 
      :key="domain.uid"
      :domain="domain"
    />
  </div>
</template>

<style scoped>
.tool-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
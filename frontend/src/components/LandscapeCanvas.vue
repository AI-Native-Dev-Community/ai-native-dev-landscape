<script setup lang="ts">
import { Tool } from '../types/ToolTypes';
import LandscapeDomain from './LandscapeDomain.vue';

defineProps<{
  domains: ToolDomain[]
}>()

const locale = navigator.language;
</script>

<template>
  <div class="tool-domain">
    <LandscapeDomain 
      v-for="domain in domains" 
      :key="domain.uid"
      :domain="domain"
    />
  </div>
</template>

<style scoped>
.tool-domain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
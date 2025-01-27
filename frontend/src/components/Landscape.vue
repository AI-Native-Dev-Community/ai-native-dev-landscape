<script setup lang="ts">
import { Tool } from '../types/ToolTypes';

defineProps<{
  domains: ToolDomain[]
}>()

const locale = navigator.language;
</script>

<template>
  <div class="tool-domain">
    <div v-for="domain in domains" :key="domain.id">
      {{ domain.name }}
      {{ domain.description }}
    </div>
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
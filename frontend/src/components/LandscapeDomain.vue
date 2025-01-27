<script setup lang="ts">
import type { ToolDomain } from '../types/ToolTypes'

defineProps<{
  domain: ToolDomain
}>()

</script>

<template>
    <div class="tool-domain">  
      {{ domain.name.en }}
      {{ domain.description.en }}



    </div>
 
</template>

<style scoped>

</style> 
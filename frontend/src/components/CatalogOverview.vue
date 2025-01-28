<script setup lang="ts">
import { useToolLandscapeStore } from '../stores/toolLandscape'
import CatalogDomain from '@/components/CatalogDomain.vue'

// get the domains and categories from the store
const toolLandscapeStore = useToolLandscapeStore()
const domains = toolLandscapeStore.getAllDomains
</script>

<template>
    <div>
        <CatalogDomain v-for="domain in domains" :key="domain.uid" :domain="domain" />
    </div>
</template>


<style scoped>

</style>

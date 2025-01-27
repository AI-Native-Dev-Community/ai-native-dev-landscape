import { defineStore } from 'pinia'
import type { ToolDomain, ToolCategory, Tool } from '../types/ToolTypes'
import toolData from '@/assets/tool-landscape.yaml'

interface ToolLandscapeState {
  domains: ToolDomain[]
  categories: ToolCategory[]
  tools: Tool[]
}

export const useToolLandscapeStore = defineStore('toolLandscape', {
  state: (): ToolLandscapeState => ({
    domains: [],
    categories: [],
    tools: [],
  }),

  actions: {
    addDomain(domain: ToolDomain) {
      this.domains.push(domain)
    },

    deleteDomain(domain: ToolDomain) {
      this.domains = this.domains.filter((d) => d.uid !== domain.uid)
    },

    getDomainById(uid: string) {
      return this.domains.find((domain) => domain.uid === uid)
    },

    addCategory(category: ToolCategory) {
      this.categories.push(category)
    },

    deleteCategory(category: ToolCategory) {
      this.categories = this.categories.filter((c) => c.uid !== category.uid)
    },

    getCategoriesByDomainId(domainId: string) {
      return this.categories.filter((category) => category.domainId === domainId)
    },

    getCategoryById(uid: string) {
      return this.categories.find((category) => category.uid === uid)
    },

    initializeFromYaml() {
      const data = toolData as { domains: ToolDomain[]; categories: ToolCategory[] }
      data.domains.forEach((domain) => this.addDomain(domain))
      data.categories.forEach((category) => this.addCategory(category))
    },

    getToolsByCategoryId(categoryId: string) {
      return this.tools.filter((tool: Tool) => tool.categoryId === categoryId)
    },
  },

  getters: {
    getAllDomains: (state) => state.domains,
    getAllCategories: (state) => state.categories,
  },
})

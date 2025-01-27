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

    addTool(tool: Tool) {
      this.tools.push(tool)
    },

    deleteTool(tool: Tool) {
      this.tools = this.tools.filter((t) => t.uid !== tool.uid)
    },

    getToolById(uid: string) {
      return this.tools.find((tool) => tool.uid === uid)
    },

    initializeFromYaml() {
      const data = toolData as { domains: ToolDomain[]; categories: ToolCategory[]; tools: Tool[] }
      data.domains.forEach((domain) => this.addDomain(domain))
      data.categories.forEach((category) => this.addCategory(category))
      data.tools.forEach((tool) => this.addTool(tool))  
    },

    getToolsByCategoryId(categoryId: string) {
      return this.tools.filter((tool: Tool) => tool.categoryId === categoryId)
    },

    getToolsByDomainId(domainId: string) {
      return this.tools.filter((tool: Tool) => tool.domainId === domainId)
    },
  },

  getters: {
    getAllDomains: (state) => state.domains,
    getAllCategories: (state) => state.categories,
  },
})

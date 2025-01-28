import { defineStore } from 'pinia'
import type { ToolDomain, ToolCategory, Tool } from '../types/ToolTypes'
import toolYamlData from '@/assets/tool-landscape.yaml'

function generateUUIDv4(): string {
  // Generate a random UUID (version 4)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

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
      const data = toolYamlData as any
      const domains = data.domains
      domains.forEach((domain: any) => {
        domain.uid = generateUUIDv4()
        this.addDomain(domain)
        const categories = domain.categories

        // If there are categories, add them
        if (categories) {
          categories.forEach((category: any) => {
            category.uid = generateUUIDv4()
            category.domainId = domain.uid
            this.addCategory(category)
            const tools = category.tools

            // If there are tools, add them
            if (tools) {
              console.log(tools)
              tools.forEach((tool: any) => {
                tool.uid = generateUUIDv4()
                tool.categoryId = category.uid
                this.addTool(tool)
              })
            }
          })
        }
      })
    },

    initializeFromYamlOrig() {
      const data = toolYamlData as {
        domains: ToolDomain[]
        categories: ToolCategory[]
        tools: Tool[]
      }
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

import { describe, it, beforeEach, expect } from 'vitest'
import { useToolLandscapeStore } from '@/stores/toolLandscape'
import { createPinia, setActivePinia } from 'pinia'

describe('LandscapeStore', () => {
  let toolLandscapeStore

  beforeEach(() => {
    setActivePinia(createPinia())
    toolLandscapeStore = useToolLandscapeStore()
  })

  it('should initialize with an empty landscape', () => {
    expect(toolLandscapeStore.getAllDomains).toEqual([])
  })

  it('should add a domain', () => {
    const domain = { id: 1, name: 'Mountain' }
    toolLandscapeStore.addDomain(domain)
    expect(toolLandscapeStore.getAllDomains).toEqual([domain])
  })

  // test for delete of a domain
  it('should delete a domain', () => {
    const domain = { id: 1, name: 'Mountain' }
    toolLandscapeStore.addDomain(domain)
    toolLandscapeStore.deleteDomain(domain.id)
    expect(toolLandscapeStore.getAllDomains).toEqual([])
  })
})

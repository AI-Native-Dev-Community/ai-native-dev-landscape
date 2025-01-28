import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useToolLandscapeStore } from '../toolLandscape'
import type { ToolDomain, ToolCategory } from '../../types/ToolTypes'

describe('toolLandscape Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with empty state', () => {
    const store = useToolLandscapeStore()
    expect(store.domains).toEqual([])
    expect(store.categories).toEqual([])
    expect(store.tools).toEqual([])
  })

  it('adds and gets domains', () => {
    const store = useToolLandscapeStore()
    const testDomain: ToolDomain = {
      uid: 'test-domain',
      name: 'Test Domain',
      description: 'Test Description',
      level: 1,
    }

    store.addDomain(testDomain)
    expect(store.getAllDomains).toEqual([testDomain])
    expect(store.getDomainById('test-domain')).toEqual(testDomain)
  })

  it('adds and gets categories', () => {
    const store = useToolLandscapeStore()
    const testCategory: ToolCategory = {
      uid: 'test-category',
      domainId: 'test-domain',
      name: 'Test Category',
      description: 'Test Category Description',
    }

    store.addCategory(testCategory)
    expect(store.getAllCategories).toEqual([testCategory])
    expect(store.getCategoryById('test-category')).toEqual(testCategory)
  })
})

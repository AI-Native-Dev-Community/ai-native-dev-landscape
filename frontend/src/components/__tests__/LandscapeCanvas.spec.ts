import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { mount } from '@vue/test-utils'
import LandscapeCanvas from '../LandscapeCanvas.vue'
import { useToolLandscapeStore } from '@/stores/toolLandscape'

describe('LandscapeCanvas', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    // initialize the store
    const toolLandscapeStore = useToolLandscapeStore()

    toolLandscapeStore.addDomain({
      uid: 'tool-domain1',
      name: 'Development Tools',
      description: 'Tools used for software development',
      level: 1,
    })
  })

  it('renders properly', () => {
    const wrapper = mount(LandscapeCanvas, {})
    expect(wrapper.text()).toContain('Development Tools')
  })
})

import { describe, it, expect , beforeEach} from 'vitest'
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
        uid: "tool-domain1",
        name: {
            en: "Development Tools",
            fr: "Outils de développement"
        },
        description: {
            en: "Tools used for software development",
            fr: "Outils utilisés pour le développement logiciel"
        },
        level: 1
    })
  })

  it('renders properly', () => {
    const wrapper = mount(LandscapeCanvas, {  })
    expect(wrapper.text()).toContain('Development Tools')
  })
})
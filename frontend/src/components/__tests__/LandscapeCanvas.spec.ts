import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LandscapeCanvas from '../LandscapeCanvas.vue'

describe('LandscapeCanvas', () => {
  it('renders properly', () => {
    const toolDomains = [
        {
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
        }
    ]
    const wrapper = mount(LandscapeCanvas, { props: { domains: toolDomains  } })
    expect(wrapper.text()).toContain('Development Tools')
  })
})
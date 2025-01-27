import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import LandscapeDomain from '../LandscapeDomain.vue';
import { createPinia } from 'pinia';
import { setActivePinia } from 'pinia';
import { useToolLandscapeStore } from '@/stores/toolLandscape';

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

describe('LandscapeDomain.vue', () => {
    it('renders correctly with props', () => {

        const toolDomain = 
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
    
        const wrapper = mount(LandscapeDomain, { props: { domain: toolDomain  } })
        expect(wrapper.text()).toContain('Development Tools')

    });
}); 
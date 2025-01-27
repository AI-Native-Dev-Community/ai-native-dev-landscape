import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Landscape from '../Landscape.vue'

describe('Landscape', () => {
  it('renders properly', () => {
    const wrapper = mount(Landscape, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

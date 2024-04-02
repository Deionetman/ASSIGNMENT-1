import { describe, it, expect, mount } from 'vitest'
import PageBanner from '../PageBanner.vue'

describe('Page Banner', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(PageBanner, {
      props: {
        title: 'Popular show'
      }
    })

    expect(wrapper.find('.banner__title').text()).toBe('Popular show')
  })
})

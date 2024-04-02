import { describe, it, expect, mount } from 'vitest'
import RatingFilter from '../RatingFilter.vue'

describe('RatingFilter', () => {
  it('emits changeOrder event when select value changes', async () => {
    const wrapper = mount(RatingFilter, {
      props: {
        sortOrder: 'asc'
      }
    })

    const select = wrapper.element.querySelector('select')

    select.value = 'desc'

    await select.dispatchEvent(new Event('change'))

    expect(wrapper.emitted('changeOrder')).toBeTruthy()
    expect(wrapper.emitted('changeOrder')).toEqual(['asc'])
    expect(wrapper.emitted('changeOrder')).toEqual(['desc'])
  })
})

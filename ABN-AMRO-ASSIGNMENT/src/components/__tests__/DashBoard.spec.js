import { describe, it, expect, beforeEach, mount } from 'vitest'
import DashBoard from '@/pages/DashBoard.vue'

describe('Dashboard page', () => {
  beforeEach(() => {
    window.fetch = async () => ({
      json: async () => ({ data: [] })
    })
  })
})

it('fetches shows on mount', async () => {
  const shows = [
    { id: 1, name: 'Show 1' },
    { id: 2, name: 'Show 2' }
  ]
  window.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: shows })
    })
  )

  it('fetches shows by query', async () => {
    const shows = [
      { id: 1, name: 'Show 1' },
      { id: 2, name: 'Show 2' }
    ]

    window.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: shows })
      })
    )

    const wrapper = mount(DashBoard)

    await wrapper.vm.handleFetchShowsByQuery()

    expect(window.fetch).toHaveBeenCalledWith('https://api.tvmaze.com/search/shows?q=')
    expect(wrapper.vm.state.fetchedShows).toEqual(shows)
    expect(wrapper.vm.state.loading).toBe(false)
  })

  it('displays loading state while fetching shows', async () => {
    const wrapper = mount(DashBoard)

    expect(wrapper.find('.loading')).toBeTruthy()

    await wrapper.vm.$nextTick()

    expect(wrapper.find('.loading')).toBeFalsy()
  })
})

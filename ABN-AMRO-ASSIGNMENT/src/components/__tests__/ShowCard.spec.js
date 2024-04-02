import { describe, it, expect, mount } from 'vitest'
import ShowCard from '../ShowCard.vue'

describe('ShowCard', () => {
  it('renders correct number of show cards', () => {
    const mockData = [
      {
        id: 1,
        name: 'Show 1',
        url: 'http://example.com/show1',
        image: { medium: 'http://example.com/image1.jpg' },
        genres: ['Drama'],
        rating: { average: 8.5 },
        language: 'English',
        status: 'Ended'
      },
      {
        id: 2,
        name: 'Show 2',
        url: 'http://example.com/show2',
        image: { medium: 'http://example.com/image2.jpg' },
        genres: ['Comedy'],
        rating: { average: 7.5 },
        language: 'Spanish',
        status: 'Ongoing'
      }
    ]

    const wrapper = mount(ShowCard, {
      props: {
        fetchedData: mockData
      }
    })

    expect(wrapper.findAll('.show-card')).toHaveLength(mockData.length)
  })
})

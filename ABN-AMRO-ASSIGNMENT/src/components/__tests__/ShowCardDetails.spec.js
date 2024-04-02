import { describe, it, expect, mount } from 'vitest'
import ShowCardDetails from '@/components/ShowCardDetails.vue'

describe('ShowCardDetails.vue', () => {
  it('renders genres, rating, language, and status correctly when showDetails prop is provided', async () => {
    const showDetails = {
      genres: ['Drama', 'Comedy'],
      rating: {
        average: 8.5
      },
      language: 'English',
      status: 'Ended'
    }

    const wrapper = mount(ShowCardDetails, {
      props: {
        showDetails
      }
    })

    await wrapper.nextTick()

    expect(wrapper.find('.show-card-details__header').textContent).toBe(
      'More details about the show:'
    )
    expect(wrapper.find('.show-card-details__item').textContent).toContain('Genres: Drama, Comedy')
    expect(wrapper.find('.show-card-details__item').textContent).toContain('Rating: 8.5')
    expect(wrapper.find('.show-card-details__item').textContent).toContain('Language: English')
    expect(wrapper.find('.show-card-details__item').textContent).toContain('Status: Ended')
  })

  it('does not render anything when showDetails prop is not provided', async () => {
    const wrapper = mount(ShowCardDetails)

    await wrapper.nextTick()

    expect(wrapper.html()).toBe('')
  })
})

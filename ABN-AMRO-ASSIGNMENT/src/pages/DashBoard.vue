<script setup>
import { onMounted, reactive } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import ShowCard from '@/components/ShowCard.vue'
import RatingFilter from '@/components/RatingFilter.vue'
import SearchBar from '@/components/SearchBar.vue'

const state = reactive({
  query: '',
  fetchedShows: [],
  isLoading: false,
  sortOrder: ''
})

onMounted(async () => {
  state.isLoading = true
  try {
    const url = 'https://api.tvmaze.com/shows'

    const res = await fetch(url)
    const data = await res.json()

    state.fetchedShows = [...data]
  } catch (err) {
    console.log('Error fetching shows: ', err)
  } finally {
    state.isLoading = false
  }
})

async function handleFetchShowsByQuery() {
  if (!state.query.trim()) {
    return
  }

  state.isLoading = true
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${state.query.trim()}`

    const res = await fetch(url)
    const data = await res.json()

    state.fetchedShows = data.map((item) => item.show)
  } catch (err) {
    console.log('Error fetching shows: ', err)
  } finally {
    state.isLoading = false
  }
}

function handleSortShowsByRating() {
  const sorted = [...state.fetchedShows]

  sorted.sort((a, b) => {
    if (state.sortOrder === 'asc') {
      return b.rating.average - a.rating.average
    } else {
      return a.rating.average - b.rating.average
    }
  })
  state.fetchedShows = sorted
}

function handleSortOrderChange(newSortOrder) {
  state.sortOrder = newSortOrder
  handleSortShowsByRating()
}

function handleSearch(query) {
  state.query = query
  handleFetchShowsByQuery()
}
</script>

<template>
  <main>
    <PageBanner title="Popular shows" />
    <SearchBar :query="state.query" @search="handleSearch" />
    <RatingFilter :sortOrder="state.sortOrder" @changeOrder="handleSortOrderChange" />

    <div v-if="state.isLoading" class="container page-inner loading">
      <h2 class="loading__header">Loading...</h2>
    </div>

    <div v-if="state.fetchedShows" class="container page-inner">
      <h2>You have searched for genre: {{ state.query }}</h2>
      <ShowCard :fetchedData="state.fetchedShows" />
    </div>
  </main>
</template>


<style lang="scss" scoped>
@import '../assets/styles/variables';

h2 {
  @media #{$media-desktop} {
    padding: 0 15px;
  }
}

.page-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

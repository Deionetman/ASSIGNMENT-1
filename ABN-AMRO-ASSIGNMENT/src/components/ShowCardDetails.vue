<script setup>
const props = defineProps({
  showDetails: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="props.showDetails" class="show-card-details">
    <div class="show-card-details__inner">
      <h3 class="show-card-details__header"><b>More details about the show:</b></h3>
      <p class="show-card-details__item"><b>Genres: </b></p>
      <ul v-if="props.showDetails.genres">
        <li v-for="(genre, index) in props.showDetails.genres" :key="index">{{ genre }}</li>
      </ul>
      <p v-if="props.showDetails.rating.average" class="show-card-details__item">
        <b>Rating:</b> {{ props.showDetails.rating.average }}
      </p>
      <p class="show-card-details__item"><b>Language:</b> {{ props.showDetails.language }}</p>
      <p class="show-card-details__item"><b>Status:</b> {{ props.showDetails.status }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
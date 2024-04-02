<script setup>
import ShowCardDetails from '@/components/ShowCardDetails.vue'
import { reactive } from 'vue'
const props = defineProps({
  fetchedData: {
    type: Array,
    required: true
  }
})

const state = reactive({
  showDetailsId: null
})

function handleToggleShowDetail(showId) {
  state.showDetailsId = state.showDetailsId === showId ? null : showId
}
</script>

<template>
  <div class="show-card__wrapper" v-if="props.fetchedData">
    <div v-for="show in fetchedData" class="show-card" :key="show.id">
      <div class="show-card__image-container">
        <img v-if="show.image" :src="show.image.medium" :alt="show.name" class="show-card__img" />
      </div>
      <div class="show-card__info">
        <a class="show-card__name" :href="show.url">{{ show.name }}</a>
        <p>{{ show.summary }}</p>
      </div>
      <div class="show-card__btn-container">
        <ShowCardDetails v-if="show.id === state.showDetailsId" :showDetails="show" />
        <button class="show-card__button" @click="handleToggleShowDetail(show.id)">
          Show details
        </button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../assets/styles/variables';

.show-card {
  display: flex;
  flex-flow: column;
  margin: 25px 0;
  text-decoration: none;
  color: black;
  text-decoration: none;
  border-radius: 12px;
  max-width: 285px;
  width: 100%;
  border-radius: 22px 22px 0 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  background: white;
  transition: transform 5 ease-in-out;

  @media #{$media-mobile} {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.02);
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media #{$media-desktop} {
      padding: 0 10px;
    }

    @media #{$media-tablet} {
      justify-content: center;
    }

    @media #{$media-mobile} {
      padding: 0 15px;
    }
  }

  &__image-container {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 22px 22px 0 0;
    aspect-ratio: 1;
  }

  &__info {
    display: flex;
    flex-flow: column;
    gap: 10px;
    margin-bottom: auto;
    padding: 15px;

    > p {
      margin: 0;
    }
  }

  &__name {
    font-weight: 700;
    color: $abn-green;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: $abn-yellow;
      text-decoration: underline;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__btn-container {
    display: flex;
    flex-flow: column;
    gap: 10px;
    padding: 15px;
  }

  &__button {
    margin-bottom: auto;
    padding: 10px;
    color: white;
    background: $abn-green;
    font-size: 15px;
    font-weight: 600;
    border: none;

    &:hover {
      background: $abn-hover-green;
      color: white;
    }
  }
}
</style>
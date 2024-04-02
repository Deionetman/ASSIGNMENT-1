<script setup>
import { reactive } from 'vue'
const props = defineProps({
  query: String
})

const state = reactive({
  query: props.query
})

const emit = defineEmits(['search'])

function handleFetchShowsByQuery() {
  emit('search', state.query)
}
</script>

<template>
  <div class="input__wrapper">
    <form @submit.prevent="handleFetchShowsByQuery" class="input__container">
      <input
        type="text"
        placeholder="Search for shows by genre"
        v-model="state.query"
        class="input__input-bar"
      />
      <button class="input__submit-button">Search by genre..</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.input {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    margin: 0 15px;
    background: white;
    outline: 3px solid $light-grey;
    max-width: 1180px;

    @media #{$media-mobile} {
      flex-wrap: wrap;
    }
  }

  &__input-bar {
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 600;

    &:focus {
      outline: none;
    }

    @media #{$media-mobile} {
      &::placeholder {
        font-size: 15px;
      }
    }
  }

  &__submit-button {
    background: $abn-green;
    color: white;
    font-weight: 700;
    padding: 8px 16px;
    border: none;
    font-size: 16px;

    @media #{$media-mobile} {
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>
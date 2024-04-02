<script setup>
import { reactive } from 'vue'
const props = defineProps({
  sortOrder: {
    type: String,
    required: true
  }
})

const state = reactive({
  sortOrder: props.sortOrder
})
const emit = defineEmits(['changeOrder'])

function handleSortOrder() {
  emit('changeOrder', state.sortOrder)
}
</script>

<template>
  <div class="input__sort-container container">
    <label for="">Sort by rating: </label>
    <select v-model="state.sortOrder" @change="handleSortOrder" class="input__select">
      <option value="asc">Highest rating</option>
      <option value="desc">Lowest rating</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.input {
  &__select {
    padding: 5px;
  }

  &__sort-container {
    padding: 15px;
    font-size: 18px;
  }
}
</style>
<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="banner">
    <h2 class="banner__title">{{ props.title }}</h2>
  </div>
</template>


<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.banner {
  text-align: center;
  color: white;
  background: $abn-green;
  padding: 15px;
  margin-bottom: 3px;
}
</style>
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <DashBoard />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

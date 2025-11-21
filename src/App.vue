<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="flex flex-col items-center">
    <RouterView />
  </main>
</template>

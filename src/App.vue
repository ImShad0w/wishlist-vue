<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
<style>
body {
  background-color: #1F1F1F;
}
</style>

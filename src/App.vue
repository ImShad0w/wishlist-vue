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
  background-color: #0D0D0F;
}
</style>

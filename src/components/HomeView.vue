<template>
  <div class="flex flex-col w-10/12 p-4 h-auto">
    <h1 class="text-5xl self-center font-semibold mt-20">Anime searcher from API!</h1>
    <Trending />
    <Upcoming />
  </div>
</template>
<script setup lang="ts">
import Trending from './mainMenu/Trending.vue';
import Upcoming from './mainMenu/Upcoming.vue';
</script>

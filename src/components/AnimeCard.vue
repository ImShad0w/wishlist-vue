<template>
  <div class="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-xl shadow-sm gap-2">
    <img :src="props.anime.images.jpg.large_image_url" :alt="props.anime.title" class="w-8/12 h-10/12 rounded-lg" />
    <h2 class="mt-2 font-semibold text-lg text-center overflow-auto max-h-8">
      {{ props.anime.title }}
    </h2>
    <div class="flex gap-1">
      <button class="bg-cyan-200 p-2 rounded-lg" @click="openAnimeDetails">See more</button>
      <button class="bg-purple-300 p-2 rounded-lg">Add to wishlist</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Anime } from "@tutkli/jikan-ts";
import router from "@/router/router.ts"
const props = defineProps<{ anime: Anime }>();

function openAnimeDetails(): void {
  router.push({ path: `/search/${props.anime.mal_id}` })
}
</script>

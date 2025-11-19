<template>
  <div class="bg-gray-100 p-4 rounded-xl shadow-sm">
    <img :src="anime.images.jpg.image_url" :alt="anime.title" class="w-full h-64 object-cover rounded-lg" />

    <h2 class="mt-2 font-semibold text-lg">
      {{ anime.title }}
    </h2>

    <p class="text-sm text-gray-600">
      Score: {{ anime.score ?? 'N/A' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Anime } from "@tutkli/jikan-ts";

// Props are automatically exposed in template as `anime`
defineProps<{ anime: Anime }>();
</script>

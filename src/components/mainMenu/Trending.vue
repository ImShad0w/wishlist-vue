<template>
  <div class="flex flex-col items-center m-auto mt-20">
    <h1 class="text-5xl font-semibold">Top Anime</h1>
    <div class="grid grid-cols-4 grid-rows-2 gap-5 mt-10">
      <!-- 2 Rows of trending-->
      <AnimeCard v-for="anime in trending" :key="anime.mal_id" :anime="anime">
        <template #wishlistButton>
          <button v-if="animeStore.isInWishlist(anime.mal_id)" @click="animeStore.removeFromWishlist(anime)"
            class="bg-red-500 p-2 rounded-lg">
            Remove
          </button>

          <button v-else @click="animeStore.addToWishlist(anime)" class="bg-purple-300 p-2 rounded-lg">
            Add to wishlist
          </button>
        </template>
      </AnimeCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TopClient } from '@tutkli/jikan-ts';
import type { Anime } from "@tutkli/jikan-ts";
import { useAnimeStore } from "@/stores/animeStore";
import AnimeCard from '../AnimeCard.vue';
import { ref } from "vue";
let trending = ref<Anime[]>([]);

const animeStore = useAnimeStore();
//IIFE Function cuz i'm lazy
(async () => {
  const client = new TopClient();
  const response = await client.getTopAnime({ page: 1 });
  trending.value = response.data.slice(0, 8);//Get the 8 more popular ones
  console.log(trending)
})();


</script>

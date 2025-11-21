<template>
  <div class="bg-gray-300 w-10/12 m-auto mt-10 p-10">
    <div class="grid grid-cols-[auto_1fr]">
      <!--Left column-->
      <div>
        <img :src="currAnime ? currAnime.images.jpg.large_image_url : `No anime`">
      </div>
      <!-- Right column-->
      <div class="flex flex-col">
        <div class="h-auto">
          <h1 class="text-5xl font-bold pl-5">{{ currAnime ? currAnime.title : "No anime found" }}</h1>
        </div>
        <div class="h-auto mt-4">
          <p class="text-2xl pl-5 font-bold">Synopsis</p>
          <p class="w-auto p-5 text-ellipsis">{{ currAnime ?
            currAnime.synopsis : "No data" }}
          </p>
        </div>
        <div class="h-auto">
          <p class="text-2xl pl-4 font-bold">Genres</p>
          <div class="flex ml-4.5 text-xl gap-5 mt-4">
            <div v-if="currAnime" v-for="genre in currAnime.genres" :key="currAnime.mal_id"
              class="bg-gray-900 p-2 rounded-lg text-white">
              <p>{{ genre.name }}</p>
            </div>
          </div>
        </div>
        <div class="h-auto mt-5">
          <p class="text-2xl pl-4 font-bold">Score: <span v-if="currAnime"
              :class="currAnime?.score > 6 ? 'text-red-600' : 'text-amber-900'">{{ currAnime?.score }}</span></p>
        </div>
        <div class="mt-10 pl-4">
          <button v-if="anime.isInWishlist(currAnime.mal_id)" @click="anime.removeFromWishlist(currAnime)"
            class="bg-red-700 p-4 rounded-lg text-lg">
            Remove from wishlist
          </button>
          <button v-else @click="anime.addToWishlist(currAnime)" class="bg-purple-300 p-4 rounded-lg text-lg">
            Add to wishlist!
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Anime } from "@tutkli/jikan-ts";
import { useAnimeStore } from "@/stores/animeStore.ts";
import { ref } from "vue";
//Use the anime store
const anime = useAnimeStore();
//Get the current anime and use it as the card
const currAnime = ref<Anime | any>(anime.currentAnime);
</script>

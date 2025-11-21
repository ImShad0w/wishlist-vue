<template>
  <div class="grid grid-cols-5 w-10/12 gap-5 m-auto mt-5">
    <div v-if="wishlist.length === 0" class="col-span-5 flex justify-center items-center">
      <p class="text-2xl  text-gray-400">No wishlisted anime!</p>
    </div>
    <AnimeCard v-else v-for="anime in animeStore.getWishlist()" :key="anime.mal_id" :anime="anime">
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
</template>
<script setup lang="ts">
import { useAnimeStore } from "@/stores/animeStore";
import AnimeCard from "./AnimeCard.vue";

const animeStore = useAnimeStore();
const wishlist = animeStore.getWishlist();
</script>

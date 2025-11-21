<template>
  <div class="flex flex-col items-center gap-10">
    <div class="flex justify-center w-screen">
      <div class="flex justify-between bg-gray-200 w-10/12 p-2 pl-8 rounded-2xl mt-10">
        <input v-model="query" placeholder="Gachiakuta"
          class="w-4xl border-none focus:outline-none text-l active:outline-none" />
        <button class="bg-white p-3.5 rounded-2xl" @click="queryAnimes(query)">Search</button>
      </div>
    </div>
    <div v-if="results.length == 0" class="flex justify-center mt-10 text-gray-500">
      <p>No results found on your Anime!</p>
    </div>
    <div v-else class="grid grid-cols-5 w-10/12 gap-5">
      <AnimeCard v-for="anime in results" :key="anime.mal_id" :anime="anime">
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
import { ref } from "vue";
import AnimeCard from "@/components/AnimeCard.vue";
//For the type of result
import type { Anime } from "@tutkli/jikan-ts";
//The client of axios to query
import { JikanClient } from "@tutkli/jikan-ts";
import { useAnimeStore } from "@/stores/animeStore";
const animeStore = useAnimeStore();

//Typed variables
const query = ref<string>("");
const results = ref<Anime[]>([]);
//Query of the text
async function queryAnimes(searchText: string) {
  const jikan = new JikanClient();

  const response = await jikan.anime.getAnimeSearch({
    q: searchText,
    page: 1,
    sfw: true,
  });

  results.value = response.data;
  console.log(response.data);
}

</script>

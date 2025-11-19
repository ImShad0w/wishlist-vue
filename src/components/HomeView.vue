<template>
  <SearchView />
  <section v-if="wishlist.length === 0">
    <h1 class="text-amber-100">No whishlist yet!</h1>
  </section>
  <section v-else>
    <h1>Here's your wishlist!</h1>
  </section>
</template>
<script setup lang="ts">
import SearchView from './SearchView.vue';
import type { Anime } from "@tutkli/jikan-ts";
import { ref } from "vue";
const wishlist = ref<Anime[]>([]);
</script>

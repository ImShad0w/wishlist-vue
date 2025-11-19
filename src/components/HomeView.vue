<template>
  <section v-if="wishlist.length === 0">
    <h1 class="text-black">No whishlist yet!</h1>
  </section>
  <section v-else>
    <h1>Here's your wishlist!</h1>
  </section>
</template>
<script setup lang="ts">
import type { Anime } from "@tutkli/jikan-ts";
import { ref } from "vue";
const wishlist = ref<Anime[]>([]);
</script>

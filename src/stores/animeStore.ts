import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Anime } from '@tutkli/jikan-ts'

export const useAnimeStore = defineStore('anime', () => {
  const currentAnime = ref<Anime | null>(null)

  const setCurrentAnime = (anime: Anime) => {
    currentAnime.value = anime;
  }

  const clearCurrentAnime = () => {
    currentAnime.value = null;
  }

  const wishlist = ref<Anime[]>([]);

  const addToWishlist = (anime: Anime | any): void => {
    wishlist.value.push(anime);
  }

  const removeFromWishlist = (anime: Anime | any): void => {
    wishlist.value = wishlist.value.filter((a: Anime) => a.mal_id != anime.mal_id)
  }

  const getWishlist = (): Anime[] => {
    return wishlist.value;
  }

  function isInWishlist(id: number) {
    return wishlist.value.some((a: Anime) => a.mal_id === id)
  }

  return {
    currentAnime,
    setCurrentAnime,
    clearCurrentAnime,
    isInWishlist,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    getWishlist,
  }
})

import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import SearchView from "@/components/SearchView.vue";
import FavView from "@/components/FavView.vue";
import AnimeFullCard from "@/components/AnimeFullCard.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/search', component: SearchView },
  { path: '/search/:id', component: AnimeFullCard, props: true },
  { path: '/favorites', component: FavView },
]

const Router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default Router

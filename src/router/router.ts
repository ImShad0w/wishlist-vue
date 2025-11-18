import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import SearchView from "@/components/SearchView.vue";
import FavView from "@/components/FavView.vue";
import FavDetailVue from "@/components/FavDetailVue.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/search', component: SearchView },
  { path: '/favorites', component: FavView },
  { path: '/favorites/:id', component: FavDetailVue },
]

const Router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default Router

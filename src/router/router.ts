import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/components/HomeView.vue";
import SearchView from "@/components/SearchView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/search', component: SearchView }
]

const Router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default Router

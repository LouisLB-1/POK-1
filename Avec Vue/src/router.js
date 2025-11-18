import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import IfPage from './views/if.vue'
import ForPage from './views/for.vue'
import ModelPage from './views/model.vue'
import CompteurPage from './views/compteur.vue'
import WatcherPage from './views/watcher.vue'
import DynamicPage from './views/dynamic.vue'
import Pendu from './views/pendu.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/if', component: IfPage },
  { path: '/for', component: ForPage },
  { path: '/model', component: ModelPage },
  { path: '/compteur', component: CompteurPage },
  { path: '/watcher', component: WatcherPage },
  { path: '/dynamic', component: DynamicPage },
  { path: '/pendu', component: Pendu },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

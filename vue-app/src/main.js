import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import HogeFuga from './pages/HogeFuga.vue'
import TemplateSyntax from './pages/TemplateSyntax.vue'
import ComputedView from './pages/ComputedView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/hoge-fuga', component: HogeFuga, props: { msg: 'from router' } },
  { path: '/template-syntax', component: TemplateSyntax },
  { path: '/computed', component: ComputedView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import HogeFuga from './pages/HogeFuga.vue'
import TemplateSyntax from './pages/TemplateSyntax.vue'
import ReactivityView from './pages/ReactivityView.vue'
import ComputedView from './pages/ComputedView.vue'
import ClassView from './pages/ClassView.vue'
import ConditionalView from './pages/ConditionalView.vue'
import ListView from './pages/ListView.vue'
import EventView from './pages/EventView.vue'
import TmpView from './pages/TmpView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/hoge-fuga', component: HogeFuga, props: { msg: 'from router' } },
  { path: '/template-syntax', component: TemplateSyntax },
  { path: '/reactivity-fundamentals', component: ReactivityView },
  { path: '/computed', component: ComputedView },
  { path: '/class-and-style', component: ClassView },
  { path: '/conditional', component: ConditionalView },
  { path: '/list', component: ListView },
  { path: '/event-handling', component: EventView },
  { path: '/tmp', component: TmpView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
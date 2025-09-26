import { createApp } from 'vue'
import App from './App.vue'
import HogeFuga from './components/HogeFuga.vue'
import TemplateSyntax from './pages/TemplateSyntax.vue'
import { createRouter, createWebHistory } from 'vue-router'

// ルート定義（例）
const routes = [
  { path: '/', component: HogeFuga, props: { msg: 'from router' } },
  { path: '/template-syntax', component: TemplateSyntax }
//   { path: '/template-syntax', component: TemplateSyntax }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import Home from './views/Home.vue'
import ProfileForm from './views/ProfileForm.vue'
import JobList from './views/JobList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/form', name: 'ProfileForm', component: ProfileForm },
  { path: '/jobs', name: 'JobList', component: JobList }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

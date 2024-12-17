// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Support from '../views/Support.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alerte',
    name: 'Alerte',
    component: () => import(/* webpackChunkName: "alerte" */ '../views/Alerte.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/default',
    name: 'Default',
    component: () => import(/* webpackChunkName: "default" */ '../views/Default.vue')
  },
  {
    path: '/carte',
    name: 'Carte',
    component: () => import(/* webpackChunkName: "Carte" */ '../views/Carte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "Connexion" */ '../views/Connexion.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

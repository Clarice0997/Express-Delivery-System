import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/express'
  },
  {
    path: '/express',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/HomeView.vue')
      },
      {
        path: 'mail',
        component: () => import(/* webpackChunkName: "home" */ '@/views/mail/MailView.vue')
      },
      {
        path: 'query',
        component: () => import(/* webpackChunkName: "home" */ '@/views/query/QueryView.vue')
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "home" */ '@/views/login/LoginView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

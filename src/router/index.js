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
        component: () => import(/* webpackChunkName: "HomeView" */ '@/views/home/HomeView.vue')
      },
      {
        path: 'mail',
        component: () => import(/* webpackChunkName: "MailView" */ '@/views/mail/MailView.vue')
      },
      {
        path: 'query',
        component: () => import(/* webpackChunkName: "QueryView" */ '@/views/query/QueryView.vue')
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "LoginView" */ '@/views/login/LoginView.vue'),
        children: [
          {
            path: '',
            redirect: 'login'
          },
          {
            path: 'login',
            component: () => import(/* webpackChunkName: "Login" */ '@/components/Login/Login.vue')
          },
          {
            path: 'register',
            component: () => import(/* webpackChunkName: "Register" */ '@/components/Login/Register.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

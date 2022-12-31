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
        name: '首页',
        component: () => import(/* webpackChunkName: "HomeView" */ '@/views/home/HomeView.vue')
      },
      {
        path: 'mail',
        name: '我要寄件',
        component: () => import(/* webpackChunkName: "MailView" */ '@/views/mail/MailView.vue'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'query',
        name: '快件查询',
        component: () => import(/* webpackChunkName: "QueryView" */ '@/views/query/QueryView.vue'),
        meta: {
          requireAuth: true
        }
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
            name: '登录',
            component: () => import(/* webpackChunkName: "Login" */ '@/components/Login/Login.vue')
          },
          {
            path: 'register',
            name: '注册',
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

import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/news',
    component: () => import('@/views/News.vue'),
    children: [
      {
        path: 'newDetail',
        name: 'Detail',
        component: () => import('@/components/NewsDetail.vue')
      },


      // 配置路由传值
      {
        path: 'newDetail/:newId',
        component: () => import('@/components/NewsDetail.vue')
      },
      {
        path: 'newDetail/:newId/:uid',
        component: () => import('@/components/NewsDetail.vue')
      },

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path:'',
    redirect:{
      name:'home'
    }
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: ()=>import('@/views/Home.vue')
  },
  // 分类
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/Category.vue')
  },
  // 购物车
  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import('@/views/Shopcar.vue')
  },
  // 我的页面
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue')
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

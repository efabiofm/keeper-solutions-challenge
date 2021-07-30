import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRoleManagement from '../views/UserRoleManagement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user-roles'
  },
  {
    path: '/user-roles',
    name: 'UserRoleManagement',
    component: UserRoleManagement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

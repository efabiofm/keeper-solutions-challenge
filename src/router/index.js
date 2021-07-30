import Vue from 'vue'
import VueRouter from 'vue-router'
import UserRoleManagement from '../views/UserRoleManagement.vue'
import UserRoleEdit from '../views/UserRoleEdit.vue'

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
  },
  {
    path: '/user-roles/form/:id?',
    name: 'UserRoleEdit',
    component: UserRoleEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

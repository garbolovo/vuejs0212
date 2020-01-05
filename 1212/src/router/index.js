import Vue from 'vue'
import VueRouter from 'vue-router'
import userlist from '@/views/UserList.vue'
import editpage from '@/views/EditPage.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: userlist
  },
  {
    path: '/edit/:id',
    name: 'EditPage',
    component: editpage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

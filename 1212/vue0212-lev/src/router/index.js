import Vue from 'vue'
import VueRouter from 'vue-router'
import userlist from '@/views/UserList.vue'
import editpage from '@/views/EditPage.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/users',
    name: 'users',
    component: userlist
  },
  {
    path: '/edit',
    name: 'UserList',
    component: editpage
  }
]

const router = new VueRouter({
  routes
})

export default router

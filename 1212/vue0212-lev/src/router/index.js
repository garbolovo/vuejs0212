import Vue from 'vue'
import VueRouter from 'vue-router'
import userlist from '@/views/UserList.vue'
import editpage from '@/views/EditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'users',
    component: userlist
  },
  {
    path: '/edit',
    name: 'EditPage',
    component: editpage
  }
]

const router = new VueRouter({
  routes
})

export default router

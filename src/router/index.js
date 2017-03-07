import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  linkActiveClass:'router-active',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
       meta:{keepAlive:true}
    },
      {
        path:'*',
          redirect:'/index',
          meta:{keepAlive:true}
      }
  ]
})

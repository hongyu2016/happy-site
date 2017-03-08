import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/views/index'
import meinvList from '@/views/meinv/meinvList.vue';
import meinvDetail from '@/views/meinv/meinvDetail'; //美女图集详情
import xingzuoList from '@/views/xingzuo/xingzuoList';  //星座list
import neihanList from '@/views/neihan/neihanList';  //内涵漫画
import xiaohuaIndex from '@/views/xiaohua/xiaohuaIndex';  //笑话index
Vue.use(Router)

export default new Router({
  linkActiveClass:'router-active',
  routes: [
      //美女图集
    /*{
      path: '/index/page/1',
      name: 'index',
      component: meinvList,
    },*/
      //美女图集翻页
      {
          path: '/index/page/:page',
          name: 'meinvList',
          component: meinvList,
      },
      //星座秀
      {
          path: '/xingzuoList',
          name: 'xingzuoList',
          component: xingzuoList,
          meta:{keepAlive:true}
      },
      //内涵漫画
      {
          path: '/neihanList',
          name: 'neihanList',
          component: neihanList,
          meta:{keepAlive:true}
      },
      //笑话
      {
          path: '/xiaohuaIndex',
          name: 'xiaohuaIndex',
          component: xiaohuaIndex,
          meta:{keepAlive:true}
      },
      {
        path:'*',
          redirect:'/index/page/1',
      }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/views/index'
import meinvList from '@/views/meinv/meinvList.vue';
import meinvDetail from '@/views/meinv/meinvDetail'; //美女图集详情
import xingzuoList from '@/views/xingzuo/xingzuoList.vue';  //星座list
import chepai from '@/views/xingzuo/chepai.vue' //车牌吉凶
import shouji from '@/views/xingzuo/shouji.vue' //手机吉凶
import xingming from '@/views/xingzuo/xingming.vue' //姓名测试
import neihanList from '@/views/neihan/neihanList.vue';  //内涵漫画
import xiaohuaIndex from '@/views/xiaohua/xiaohuaIndex.vue';  //笑话index
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
          meta:{keepAlive:true},
          children:
          [
             /* {
                  path:'',
                  component:shouji
              },*/
              {
                  path:'shouji',
                  component:shouji
              },
              {
                  path:'chepai',
                  component:chepai
              },
              {
                  path:'xingming',
                  component:xingming
              }
          ],
          redirect: '/xingzuoList/shouji'
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

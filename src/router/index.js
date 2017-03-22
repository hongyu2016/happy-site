import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/views/index'
//import meinvList from '@/views/meinv/meinvList.vue';
import meinvDetail from '@/views/meinv/meinvDetail'; //美女图集详情
//import xingzuoList from '@/views/xingzuo/xingzuoList.vue';  //星座list
//import chepai from '@/views/xingzuo/chepai.vue' //车牌吉凶
//import shouji from '@/views/xingzuo/shouji.vue' //手机吉凶
//import xingming from '@/views/xingzuo/xingming.vue' //姓名测试
//import neihanIndex from '@/views/neihan/neihanIndex.vue';  //内涵漫画
//import neihanList from '@/views/neihan/neihanList.vue';  //内涵漫画
//import neihanDetail from '@/views/neihan/neihanDetail.vue';  //内涵漫画详情
//import xiaohuaIndex from '@/views/xiaohua/xiaohuaIndex.vue';  //笑话index

//路由懒加载--异步组件
const meinvList = resolve => require(['@/views/meinv/meinvList.vue'], resolve);
const xingzuoList = resolve => require(['@/views/xingzuo/xingzuoList.vue'], resolve);
const chepai = resolve => require(['@/views/xingzuo/chepai.vue'], resolve);
const xingming = resolve => require(['@/views/xingzuo/xingming.vue'], resolve);
const shouji = resolve => require(['@/views/xingzuo/shouji.vue'], resolve);
const neihanIndex = resolve => require(['@/views/neihan/neihanIndex.vue'], resolve);
const neihanList = resolve => require(['@/views/neihan/neihanList.vue'], resolve);
const neihanDetail = resolve => require(['@/views/neihan/neihanDetail.vue'], resolve);
const xiaohuaIndex = resolve => require(['@/views/xiaohua/xiaohuaIndex.vue'], resolve);

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
          redirect: '/xingzuoList/shouji'  //重定向shouji路由
      },
      //内涵漫画
      {
          path: '/neihanList',
          name: 'neihanIndex',
          component: neihanIndex,
          children:[
              {
                  path:'page/:page',
                  component:neihanList
              },
              {
                  path:'page/:page/detail/:id',
                  component:neihanDetail
              }
          ],
          redirect: '/neihanList/page/1'  //重定向路由
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

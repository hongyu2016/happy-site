// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.min.css'  // 组件css可以覆盖插件的css
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import MintUi from 'mint-ui';
import infiniteScroll from 'vue-infinite-scroll' //无限滚动

Vue.config.productionTip = false
Vue.prototype.$http = axios;

Vue.use(MintUi);
Vue.use(VueAxios,axios);
Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

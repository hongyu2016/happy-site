<template>
  <div id="app">
    <commonHeader></commonHeader>
    <div class="main">
      <transition name="slide-left">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <router-view v-if="!$route.meta.keepAlive"></router-view>

    </div>
    <commonFooterMenu></commonFooterMenu>
  </div>
</template>

<script>
  import commonHeader from './components/header.vue';
  import commonFooterMenu from './components/commonFooterMenu.vue';
export default {
  name: 'app',
    components:{commonHeader,commonFooterMenu}
}
</script>

<style lang="scss">
  @import "./assets/scss/variables.scss";
  ul,li{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1.4rem;
  padding-bottom: 1.6rem;
}

</style>

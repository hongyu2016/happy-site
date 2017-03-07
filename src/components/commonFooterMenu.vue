<template>
    <footer id="footer">
        <router-link :to="{name:index}" tag="div" class="sub-menu">
            <span class="icon-ambulance"></span>
            美女图集
        </router-link>
        <router-link :to="{name:index}" tag="div" class="sub-menu">
            星座秀
        </router-link>
        <router-link :to="{name:index}" tag="div" class="sub-menu">
            内涵漫画
        </router-link>
        <router-link :to="{name:index}" tag="div" class="sub-menu">
            笑话大全
        </router-link>
    </footer>
</template>
<script>
    export default{
        name:'head',
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    #footer{position: fixed;bottom: 0;left: 0;width: 100%;display: -webkit-box;
        display: -moz-box;
        display: -ms-box;}
    .sub-menu{-webkit-box-flex: 1;-moz-box-flex: 1;text-align: center}
</style>
<template>
    <footer id="footer">
        <!--<router-link :to="{name:'index'}" tag="div" class="sub-menu">-->
            <router-link :to="{name:'meinvList',params:{page:1}}" tag="div" class="sub-menu">
            <span class="icon-camera-retro"></span>
            美女图集
        </router-link>
        <router-link :to="{name:'xingzuoList'}" tag="div" class="sub-menu">
            <span class="icon-star-empty"></span>
            星座秀
        </router-link>
        <router-link :to="{name:'neihanList'}" tag="div" class="sub-menu">
            <span class="icon-ambulance"></span>
            内涵漫画
        </router-link>
        <router-link :to="{name:'xiaohuaIndex'}" tag="div" class="sub-menu">
            <span class="icon-coffee"></span>
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
    @import "../assets/scss/variables.scss";
    #footer{position: fixed;bottom: 0;left: 0;width: 100%;display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        border-top:1px solid #ccc;
        background-color: #fff;
    }
    .sub-menu{-webkit-box-flex: 1;-moz-box-flex: 1;text-align: center;font-size: 12px;padding: 0.2rem 0;color: $gray}
    .sub-menu>span{display: block;font-size: 0.6rem}
    .router-active{color: $blue}
</style>
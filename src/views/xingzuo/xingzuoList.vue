<template>
    <div class="list">
        <div class="default">
            <p>
                想知道您最近的运势吗？试试下面的测试吧！
            </p>
        </div>
        <div class="btn-group">
            <router-link to="/xingzuoList/shouji" tag="div" class="btn">
                手机号吉凶
            </router-link>
            <router-link to="/xingzuoList/xingming" tag="div" class="btn">
                姓名测试
            </router-link>
            <router-link to="/xingzuoList/chepai" tag="div" class="btn">
                车牌号吉凶
            </router-link>
        </div>

        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>


    </div>
</template>
<script>
    export default{
        methods:{

        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/variables.scss";
    .list{
        padding: 0.2rem;
    }
    .default{
        font-size: 14px;
        padding: 0.5rem 0;
    }
    .btn-group{
        display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        .btn{
            -webkit-box-flex: 1;-moz-box-flex: 1;text-align: center;
            font-size: 14px;
            padding: 0.3rem 0;
            background-color: lighten($gray,35%);
        }
    }
    .content{

    }
    .btn-group .router-active{background-color:$blue;color:$white}
    //确定按钮
    .sure-box{
        padding: 0.4rem 0;
        width: 100%;
    button{
        width: 100%;
        display: block;
        font-size: 14px;
        padding: 0.3rem 0;
        background-color: $blue;
        border:none;
        color: $white;
        &:active{
             background-color: darken($blue,15%);
         }
        }
    }

</style>
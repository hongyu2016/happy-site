<template>
    <div class="list-content">
        <div class="input-group">
            <div class="item text">手机号</div>
            <div class="item input-box">
                <input type="tel" class="phone" v-model.trim="phone" placeholder="请输入手机号" @keyup.enter="search">
            </div>
        </div>
        <div class="search-content">

        </div>
    </div>
</template>
<script>
    import api from'../../api/api.js';
    export default{
        name:'shouji',
        data(){
            return{
                phone:''
            }
        },
        methods:{
            search(){
                alert(this.phone)
                this.$http.get(api.searchPhone())
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";
    .input-group{
        margin-top: 0.5rem;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-content:center;
        justify-content:center;
        align-items:center;
        .item{

        }
        .text{
            width: 30%;
            -webkit-box-flex: 1;
            -moz-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            font-size: 14px;
        }
        .input-box{
            width: 70%;
            -webkit-box-flex: 3;
            -moz-box-flex: 3;
            -webkit-flex: 3;
            -ms-flex: 3;
            flex: 3;
            .phone{
                border:1px solid lighten($gray,20%);
                width: 100%;
                box-sizing: border-box;
                font-size: 14px;
                text-decoration: none;
                padding:0.2rem;
            &:focus{
                 text-decoration: none;
             }

            }
        }

    }

</style>
<template>
    <div class="list-content">
        <div class="turn-page">
            <button type="button" class="btn btn-prev"  @click="prev">
                <span class="icon-angle-left"></span>
            </button>
            <button type="button" class="btn btn-next"  @click="next">
                <span class="icon-angle-right"></span>
            </button>
        </div>

        <loading v-show="loading" class="loading"></loading>
        <ul class="neihan-list">
            <li v-for="item in list" @click="detail(item.id)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
    import api from '../../api/api.js';
    import { Toast } from 'mint-ui'; //提示
    import loading from '../../components/loading.vue'
    export default{
        data(){
            return{
                list:[],
                page:1,
                loading:false
            }
        },
        mounted(){
            if(!this.$route.query.page){
                //路由使用redirect重定向时 使用的是params参数方式  需要判断
                this.page=this.$route.params.page;
            }else{
                this.page=this.$route.query.page;  //初始化时获取地址栏的页码
            }
            this.get();
        },
        watch:{
            //路由切换时进行判断--当检测将要跳转的路由为meinvList时 执行获取数据的操作
            '$route'(to,from){
                if(to.name=='neihanList'){
                    this.page=this.$route.query.page;
                    this.get();
                }
            }
        },
        methods:{
            get(){
                let _this=this;
                this.loading=true;
                this.$http.get(api.getManhua(this.page)).then(function(res){
                    if(res.data.showapi_res_code==0){
                        _this.list=res.data.showapi_res_body.pagebean.contentlist;
                        _this.loading=false;
                    }else{
                        Toast({
                            message: res.data.showapi_res_error,
                            position: 'center',
                            duration: 5000
                        });
                    }
                })
            },
            prev(){
                this.page--;
                if(this.page<=1){
                    this.page=1;
                }
                this.$router.push({ path: '/neihanList/page/:page', query: { page: this.page }});
                this.get()

            },
            next(){
                this.page++;
                this.$router.push({ path: '/neihanList/page/:page', query: { page: this.page }});
                this.get()
            },
            detail(id){
                this.$router.push({ path: '/neihanList/page/:page/detail/:id', query: { id: id }});
            }

        },
        components:{loading}
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";
    .btn{
        position: fixed;top:50%;z-index: 10;transform: translateY(-50%);
        -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-o-transform: translateY(-50%);
        border:none;background-color: $blue;font-size: 1rem;padding: 0 0.3rem;color: $white;text-align: center;
    &:active{
         background-color:lighten($blue,15%)
     }
    }
    .btn-prev{
        left:0;
    }
    .btn-next{
        right:0;
    }

    .neihan-list{
        font-size: 16px;
        padding: 0.2rem;
        li{
            padding: 0.3rem 0;
            border-bottom: 1px solid lighten($gray,35%);
        }
    }
</style>
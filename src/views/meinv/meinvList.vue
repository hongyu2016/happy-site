<template>
    <div class="list">
        <div class="turn-page">
            <button type="button" class="btn btn-prev"  @click="prev">
                <span class="icon-angle-left"></span>
            </button>
            <button type="button" class="btn btn-next"  @click="next">
                <span class="icon-angle-right"></span>
            </button>
        </div>
        <loading v-show="loading" class="loading"></loading>
        <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore" >

            <ul class="list-ul">
                <li v-for="item in list">
                    <a :href="item.url">
                        <div class="list-div">
                            <img :src="item.thumb">
                            <div class="text">
                                {{item.title}}
                            </div>
                        </div>
                    </a>
                </li>
            </ul>

        </mt-loadmore>
    </div>
</template>
<script>
    import api from '../../api/api.js';
    import { Toast } from 'mint-ui'; //提示
    import loading from '../../components/loading.vue'
    export default{
        name:'meinvListHtml',
        data(){
            return{
                list:[],
                page:1,
                loading:false,
                noMore:false
            }
        },
        mounted(){
            this.page=this.$route.params.page;  //初始化时获取地址栏的页码
            this.get();
        },
        watch:{
            //路由切换时进行判断--当检测将要跳转的路由为meinvList时 执行获取数据的操作
            '$route'(to,from){
                if(to.name=='meinvList'){
                    this.page=this.$route.params.page;
                    this.get();
                }
            }
        },
        methods:{
            //获取图集数据
            get(){
                let _this=this;
                this.loading=true;
                this.$http.get(api.getMeinvList(10,this.page,34)).then(function(res){
                    if(res.data.showapi_res_code==0){
                        //循环对象中的长度 若是1 则没有数据了
                        let jslength=0;
                        for(let js2 in res.data.showapi_res_body){
                            jslength++;
                        }
                        if(jslength<=1){
                            Toast({
                                message: '没有更多内容了',
                                position: 'bottom',
                                duration: 2000
                            });
                            _this.list='';
                            _this.loading=false;
                            _this.$refs.loadmore.onTopLoaded();
                        }else{

                            _this.list=res.data.showapi_res_body;
                            _this.loading=false;
                            _this.$refs.loadmore.onTopLoaded();
                        }
                    }else{
                        Toast({
                            message: res.data.showapi_res_error,
                            position: 'center',
                            duration: 5000
                        });
                    }
                })
            },

            loadTop() {
                // 上拉刷新数据
                this.get();
            },
            prev(){
                this.page--;
                if(this.page<=1){
                    this.page=1;
                }
                this.$router.push({ name: 'meinvList', params: { page: this.page }});
            },
            next(){
                this.page++;
                this.$router.push({ name: 'meinvList', params: { page: this.page }});
            }

        },
        components:{loading}
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";
    a{color:$white}
    .list{position: relative;}
    .list-div{
        position: relative;
        img{
            width: 100%;
            display: block;
        }
        .text{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0.3rem;
            background-color: rgba(0,0,0,0.5);
            box-sizing: border-box;
            font-size: 14px;
        }
    }
    .list-ul>li{ margin-bottom: 0.2rem;box-sizing: border-box}

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

    .loading{position: fixed;left: 50%;top: 50%;z-index: 15;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%)}
</style>
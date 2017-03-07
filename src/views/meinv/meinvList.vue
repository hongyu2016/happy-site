<template>
    <div class="list">
        <mt-loadmore :top-method="loadTop" :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

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
    export default{
        name:'meinvList',
        data(){
            return{
                list:[],
                page:1,
                loading:true,
                allLoaded:false
            }
        },
        mounted(){
            this.get();
        },
        methods:{
            //获取图集数据
            get(){
                let _this=this;
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
                            _this.allLoaded = true;
                            _this.$refs.loadmore.onTopLoaded();
                        }else{
                            _this.list=res.data.showapi_res_body;
                            _this.$refs.loadmore.onTopLoaded();
                            _this.allLoaded = true;  //已经加载完成 这是底部加载更多的
                            _this.$refs.loadmore.onBottomLoaded();
                        }
                    }else{
                        Toast({
                            message: res.data.showapi_res_error,
                            position: 'bottom',
                            duration: 5000
                        });
                    }
                })
            },

            loadTop() {
                // 上拉刷新数据
                this.get();
                console.log('0')
            },
            /*loadMore(){
                this.loading=false;

                this.page++;
                this.get();
                console.log('1***************')
            }*/
            loadBottom(){
                this.get();
                console.log('//////////')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/variables.scss";
    a{color:$white}
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
        }
    }
    .list-ul>li{ margin-bottom: 0.2rem;box-sizing: border-box}
</style>
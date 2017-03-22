<template>
    <div class="list-content">
        <div class="input-group">
            <div class="item text">姓氏</div>
            <div class="item input-box">
                <input type="tel" class="phone" v-model.trim="xing" placeholder="请输入姓氏">
            </div>
        </div>
        <div class="input-group">
            <div class="item text">名字</div>
            <div class="item input-box">
                <input type="tel" class="phone" v-model.trim="ming" placeholder="请输入名字">
            </div>
        </div>
        <div class="sure-box">
            <button type="button" @click="search">查询</button>
        </div>
        <div class="search-content">
            <loading v-show="loading"></loading>
            <dl class="result-dl" v-show="show">
                <dt>
                    分析结果
                </dt>
                <dd class="result-dd">
                    <div class="left">得分</div>
                    <div class="right">{{list.score}}</div>
                </dd>
                <dd class="result-dd">
                    <div class="left">吉凶</div>
                    <div class="right">{{list.jx}}</div>
                </dd>
                <dd class="result-dd">
                    <div class="left">简批</div>
                    <div class="right">{{list.jp}}</div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    import api from'../../api/api.js';
    import loading from '../../components/loading.vue'
    import { Toast } from 'mint-ui'; //提示
    export default{
        name:'shouji',
        data(){
            return{
                xing:'',
                ming:'',
                list:[],
                show:false,
                loading:false
            }
        },
        methods:{
            search(){
                if(this.xing==''){
                    Toast({
                        message: '请输入姓氏',
                        position: 'center',
                        duration: 5000
                    });
                    return false;
                }
                if(this.ming==''){
                    Toast({
                        message: '请输入名字',
                        position: 'center',
                        duration: 5000
                    });
                    return false;
                }
                this.loading=true;
                let _this=this;
                this.$http.get(api.searchName(this.xing,this.ming)).then(function(res){
                    if(res.data.showapi_res_code==0){
                        _this.list=res.data.showapi_res_body.item;
                        _this.show=true;
                        _this.loading=false;
                    }else{
                        Toast({
                            message: res.data.showapi_res_error,
                            position: 'center',
                            duration: 5000
                        });
                        _this.loading=false;
                    }
                }).catch((error)=>{
                    Toast({
                        message: error,
                        position: 'center',
                        duration: 5000
                    });
                    _this.loading=false;
                })
            }
        },
        components:{loading}
    }
</script>
<style lang="scss">
    @import "../../assets/scss/variables.scss";
    .input-group{
        margin-top: 0.5rem;
        display: flex;
        align-content:center;
        justify-content:center;
        align-items:center;
        .item{

        }
        .text{
            flex: 1;
            font-size: 14px;
        }
        .input-box{
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
    .search-content{
        .result-dl>dt{
            font-size:14px;
            padding: 0.4rem 0;
            text-align: center;
        }
    }
    .result-dd{
        box-sizing: border-box;
        display: flex;
        align-content:center;
        justify-content:center;
        align-items:stretch;
        flex-direction: row;
        font-size: 14px;
        border:1px solid $white;
        div{
            /*嵌套flex-使内容居中*/
            display: flex;
            align-items:center;
            justify-content: center;
        }
        .left{
            flex:2;
            align-self:stretch;
            background-color: lighten($orange,25%);
            height: auto;
            padding: 0.3rem 0.2rem;
        }
        .right{
            flex:4;
            height: auto;
            background-color: lighten($orange,30%);
            padding: 0.3rem 0.2rem;
        }
    }


</style>
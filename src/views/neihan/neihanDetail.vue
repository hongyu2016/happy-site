<template>
    <div class="list">
        <loading class="loading" v-show="show"></loading>
        <h1 class="title">标题：{{list.title}}</h1>
        <img :src="list.img" class="manhua-img">
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
            loading:false,
            show:false
        }
    },
    mounted(){
        this.get();
    },
    methods:{
        get(){
            let _this=this;
            this.loading=true;
            this.show=true;
            this.$http.get(api.getManhuaDetail(this.$route.query.id)).then(function(res){
                if(res.data.showapi_res_code==0){
                    _this.list=res.data.showapi_res_body;
                    _this.loading=false;
                    _this.show=false
                }else{
                    Toast({
                        message: res.data.showapi_res_error,
                        position: 'center',
                        duration: 5000
                    });
                }
            })
        }
    },
    components:{loading}
}
</script>
<style lang="scss" scoped>
    .list{padding: 0.2rem}
    .title{font-size: 16px;padding: 0.2rem}
    .manhua-img{width: 100%}
</style>
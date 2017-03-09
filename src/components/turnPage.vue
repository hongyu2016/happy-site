<template>
    <div class="turn-page">
        <button type="button" class="btn btn-prev"  @next="prev">
            <span class="icon-angle-left"></span>
        </button>
        <button type="button" class="btn btn-next"  @next="next">
            <span class="icon-angle-right"></span>
        </button>
    </div>
</template>
<script>
    export default{
        methods:{
            /*prev(){
                this.$emit('prev', '这是子组件传递的消息');
            },
            next(){
                this.$emit('next', '这是子组件传递的消息2');
            }*/
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables.scss";
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
</style>
<template>
  <header id="head">
    <mt-header fixed  title="标题过长会隐藏后面的内容啊哈哈哈哈" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>

    </mt-header>
  </header>
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
  .header{height: 1.2rem}
</style>

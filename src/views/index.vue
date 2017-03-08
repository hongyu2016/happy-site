<template>
  <div class="index">
    <meinvList></meinvList>
  </div>
</template>

<script>
  import meinvList from './meinv/meinvList.vue';
export default {
  name: 'index',
  data () {
    return {

    }
  },
    components:{meinvList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

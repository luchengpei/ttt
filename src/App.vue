<template>
  <div id="app">
    <!-- <router-view/> -->
    <div>{{count}}</div>
    <button @click="add(1)">add</button>
    <button @click="cut(1)">cut</button>
    <haha/>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  mounted(){
   
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'add',
      'cut'
    ])
  },
  components:{
    haha:require('@/components/haha.vue').default
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ;
}
</style>

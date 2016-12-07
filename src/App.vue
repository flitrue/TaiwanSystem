<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <LeftMenu></LeftMenu>
  </div>
</template>
<script>
  import "../node_modules/bootstrap/less/bootstrap.less";
  import "../node_modules/font-awesome/less/font-awesome.less";
  import HeaderNav from './components/Header/Header.vue';
  import LeftMenu from './components/LeftMenu/LeftMenu.vue';
  import "../node_modules/bootstrap/dist/js/bootstrap";

  export default {
    name: 'app',
    data(){
        return{

            appHight:''



        }
    },
    components: {
      HeaderNav,LeftMenu
    }
  }
</script>

<style>
  #app {
    border-radius:0px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>


<script src="main.js"></script>
<template>
  <div id="app">
    <router-view keep-alive></router-view>
  </div>
</template>
<script>
  import "../node_modules/bootstrap/less/bootstrap.less";
  import "../node_modules/font-awesome/css/font-awesome.css";
  import "../node_modules/bootstrap/dist/js/bootstrap";
  import "components/animate.less";


  export default {
    name: 'app',
    data(){
        return{
            appHight:''

        }
    },
    mounted(){ console.log('这是mounted的方法');},

    components: {

    }
  }
</script>

<style>
  #app {
    /*min-width: 1150px;*/
    border-radius:0px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
</style>

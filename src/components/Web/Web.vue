<template>
  <div class="home">
    <header-nav> </header-nav>
    <div class="leftNav">
      <left-menu></left-menu>
    </div>

    <router-view ></router-view>


  </div>


</template>
<script>
  import HeaderNav from '../Header/Header.vue';
  import LeftMenu from '../LeftMenu/LeftMenu.vue';
  export default {
  name: 'Web',
  data () {
    return {
      userName: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
    sdf(){ this.changeRouter(); },
  watch:{
      '$router':'sdf'

  },
  components:{

    HeaderNav,LeftMenu
  },
  methods: {
    changeRouter(){
      const sd= this.$route;
      colsole.log('sd',sd);

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .home{ width: 100%; height: auto; }
  .leftNav{ width: 13%;float: left; }
  .rightContent{ width: 87%; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }

</style>

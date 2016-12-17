<template>
  <div class="home ">
    <header-nav> </header-nav>

    <div class="leftNav">
      <left-menu></left-menu>
    </div>
    <div class="container rightContent">
      <div class="row">
        <div class="col-xs-12 col-md-12 pull-left ">
          <ol class="breadcrumb panel-t " >
            <li><a href="#">AroundRegional</a></li>
            <li><a href="#">2016</a></li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-4 col-lg-4 col-sm-12 ">
          <div class="panel panel-success ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content <br><br><br><br><br><br><br>
            </div>

          </div>

        </div>
        <div class="col-xs-12 col-md-8 col-lg-8 col-sm-12 ">
          <div class="panel panel-success ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content<br><br><br><br><br><br><br>
            </div>

          </div>




        </div>

      </div>

      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-6 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content<br><br><br><br><br><br><br>
            </div>

          </div>

        </div>
        <div class="col-xs-12 col-md-6 col-lg-6 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content <br><br><br><br><br><br><br>
            </div>

          </div>




        </div>

      </div>

    </div>


  </div>


</template>
<script>
  import HeaderNav from '../Header/Header.vue';
  import LeftMenu from '../LeftMenu/LeftMenu.vue';
export default {
  name: 'Home',
  data () {
    return {
      userName: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

    HeaderNav,LeftMenu
  },
  methods: {

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

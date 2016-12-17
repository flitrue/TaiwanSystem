<template>
  <div class="HotCharacters">
    <header-nav> </header-nav>

    <div class="container rightContent">
      <div class="row">
        <div class="col-xs-12 col-md-12 pull-left ">
          <ol class="breadcrumb panel-t " >
            <li><a href="#">HotCharacters</a></li>
            <li class="active"><a href="#">2016</a></li>
          </ol>
        </div>
      </div>
      <div class="row">

        <div class="col-xs-12 col-md-12">
          <div class="panel panel-success ">
            <div class="panel-heading panel-t ">HotCharacters</div>
            <div class="panel-body">
              Panel content<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2994454967&site=qq&menu=yes"><i class="fa fa-qq fa-2x"></i></a>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2994454967&site=qq&menu=yes"><i class="fa fa-weixin fa-2x"></i></a>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2994454967&site=qq&menu=yes"><i class="fa fa-weibo fa-2x"></i></a>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2994454967&site=qq&menu=yes"><i class="fa fa-angle-up fa-3x"></i></a>
            </div>

          </div>

        </div>

      </div>



    </div>


  </div>


</template>
<script>
  import HeaderNav from '../Header/Header.vue';

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

    HeaderNav
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .HotCharacters{ width: 100%; height: auto; }
  .rightContent{ width: 100%; height:600px; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }

</style>

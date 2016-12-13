<template>

  <nav class="navbar nav-pills navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">台湾舆情监测分析系统</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


        <ul class="nav navbar-nav navbar-right">
          <li class="active"><router-link to="/">热点人物</router-link></li>
          <li><router-link to="/One">台湾地区</router-link></li>
          <li><router-link to="/Two">周边地区</router-link></li>
          <li><router-link to="/">大陆地区</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">个人设置 <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">个人中心</a></li>
              <li><a href="#">系统设置</a></li>
              <li class="divider"></li>
              <li><a href="#">退出登录</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

{{msg}}

</template>

<script>


export default {
  name: 'HeaderNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  methods: {


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav { border-radius:0px; border-bottom:1px; margin-bottom:0px;   }


</style>

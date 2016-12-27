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
         <router-link class="navbar-brand" to="/Home"> <i class="fa fa-ge fa-lg"></i>&nbsp; 台湾舆情监测分析系统</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


        <ul class="nav navbar-nav navbar-right">
          <li class="active">
            <router-link to="/Hot" replace><i class="fa fa-globe fa-fw"></i>&nbsp; 热点人物</router-link></li>
          <li><router-link to="/Web/Taiwan"><i class="fa fa-eercast fa-fw"></i>&nbsp;台湾地区</router-link></li>
          <li><router-link to="/Web/Around"><i class="fa fa-first-order fa-fw"></i>&nbsp;周边地区</router-link></li>
          <li><router-link to="/Web/Home"><i class="fa fa-forumbee fa-fw"></i>&nbsp;大陆地区</router-link></li>

          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">&nbsp;&nbsp;<i class="fa fa-cog fa-fw"></i>&nbsp;个人设置 <i class="fa fa-angle-down fa-fw"></i></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">&nbsp;&nbsp;<i class="fa fa-user fa-fw"></i>&nbsp;个人中心</a></li>
              <li><a href="#">&nbsp;&nbsp;<i class="fa fa-cogs fa-fw"></i>&nbsp;系统设置</a></li>
              <li class="divider"></li>
              <li><router-link to="/">&nbsp;&nbsp;<i class="fa fa-dot-circle-o fa-fw"></i>&nbsp;退出登录</router-link></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>



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

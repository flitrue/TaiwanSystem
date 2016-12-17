<template>

  <div class="logout animated bounceInDown">
    <h2><i class="fa fa-firefox fa-fw"></i>&nbsp;Taiwan</h2>
    <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-user-secret fa-fw"></i>&nbsp;</span>
      <input type="text" v-model="userName" class="form-control" placeholder="Username">
    </div>
    <br>

    <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-key fa-fw"></i>&nbsp;</span>
      <input type="password" v-model="password"  class="form-control" placeholder="password">
    </div>
    <br>
    <div class="form-group">

        <button type="submit"  class="btn btn-default"  href="javascript:void(0);"  @click="login">Login <i class="fa fa-angle-double-right fa-fw"></i>&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="reset" class="btn btn-default" >注册</button>

    </div>

  </div>

</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      userName: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login(){
                if(!this.userName && !this.password){
                    alert('用户名密码不能为空！');
                    return ;
                }
                if(this.userName != 'admin' || this.password != '123abc'){
                    alert('用户名密码不正确！');
                    return ;
                }
                //Cookie.set('business_uid', 'admin');
                //location.hash = '#!/home';
               console.log(this.userName,this.password);

               this.$router.push({name: 'Home'});

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout{width:100%; max-width: 300px; height: auto; margin:15% auto;}
</style>

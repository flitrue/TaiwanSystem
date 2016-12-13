<template>

  <div class="login ">
    <h2>login</h2>
    <div class="input-group">
      <span class="input-group-addon">用户名</span>
      <input type="text" v-model="userName" class="form-control" placeholder="Username">
    </div>
    <br>

    <div class="input-group">
      <span class="input-group-addon">密&nbsp;&nbsp;&nbsp;码</span>
      <input type="password" v-model="password"  class="form-control" placeholder="password">
    </div>
    <br>
    <div class="form-group">
      <div class="col-sm-offset-1 col-sm-10">
        <button type="submit"  class="btn btn-default"  href="javascript:void(0);"  @click="login">登录</button>
        <button type="reset" class="btn btn-default" >注册</button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'login',
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
.login{ width:20%; height: auto; margin:10% auto; }
</style>

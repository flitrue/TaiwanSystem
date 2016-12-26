<template>

    <div class="container rightContent">
      <div class="row">
        <div class="col-xs-12 col-md-12 pull-left ">
          <ol class="breadcrumb panel-t " >
            <li><a href="#">Home</a></li>
            <li><a href="#">2013</a></li>
            <li class="active">十一月</li>
          </ol>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content<br>

我的自定义指令操作的.

              <!--<div class="chart" v-echarts="themeLineOption" :loading="themeLineLoading"  theme="macarons"></div>-->


              <div id="hook-arguments-example" v-demo:hello.a.b="message"></div>
              <hr>

              <div v-wlp:"{sd:}"></div>




            </div>

          </div>

        </div>


      </div>

    </div>




</template>
<script>
  import Vue from 'vue'
//  import echarts from 'echarts'
//  import Echarts from '../../configs/echarts';
//  Vue.directive('echarts', Echarts);
  Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify;
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
  });
  new Vue({
    el: '#hook-arguments-example',
    data: {
      message: 'hello!'
    }
  });


export default {

  name: 'Home',
  data () {
    return {
      userName: '',
      password: '',
      themeLineLoading:false,
      themeLineOption: {
        title: {
        text: 'ECharts 入门示例'
      },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{


  },
  methods: {

  },
  mounted () {



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

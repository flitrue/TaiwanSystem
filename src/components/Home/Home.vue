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
              <div class="chart" v-echarts="{option: themeLineOption ,click:sdf,theme: 'macarons' }"></div>

              <hr>


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
      sdf (params) {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
      }
    }

  ,
  mounted () {



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .chart { width:100%; height:500px; }
  .leftNav{ width: 13%;float: left; }
  .rightContent{ width: 87%; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }

</style>

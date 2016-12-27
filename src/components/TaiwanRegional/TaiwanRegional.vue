<template>

    <div class="container rightContent">
      <div class="row">
        <div class="col-xs-12 col-md-12 pull-left ">
          <ol class="breadcrumb panel-t " >
            <li><a href="#">TaiwanRegional</a></li>
            <li><a href="#">2016</a></li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-7 col-lg-7 col-sm-12 ">
          <img class="mapT" src="../../assets/u0.png">
        </div>
        <div class="col-xs-12 col-md-5 col-lg-5 col-sm-12 ">
            <div class="chartsH" v-echarts="{option: dataset1 , theme: 'macarons' }"></div>
            <div class="chartsH" v-echarts="{option: dataset2 , theme: 'macarons' }"></div>
            <div class="chartsH" v-echarts="{option: dataset3 , theme: 'macarons' }"></div>
        </div>

      </div>

      <div class="row">
        <div class="col-xs-12 col-md-7 col-lg-7 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content<br><br><br><br><br><br><br>
            </div>

          </div>

        </div>
        <div class="col-xs-12 col-md-5 col-lg-5 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content <br><br><br><br><br><br><br>
            </div>

          </div>




        </div>

      </div>

    </div>


</template>
<script>

export default {
  name: '',
  data () {
    return {
      userName: '',
      password: '',
      dataset1:{
        title : {
          text: '台湾独立统计调查结果',
          subtext: '更新时间: 2016/7/31 ',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        backgroundColor:'rgba(245,245,245,0.9)',
        legend: {
          orient: 'vertical',
          left:15,
          data: ['维持现状','永远维持现状','维持现状以后再独立','尽快独立','不知道']
        },
        series : [
          {
            name: '台湾独立民意调查',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'维持现状'},
              {value:310, name:'永远维持现状'},
              {value:234, name:'维持现状以后再独立'},
              {value:135, name:'尽快独立'},
              {value:1548, name:'不知道'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      dataset2:{
        title: {
          text: '台湾历年统独议题民意趋势'
        },
        tooltip: { },
        legend: {
          top:10,
          right:50,
          data:['民意','呵呵']
        },
        backgroundColor:'rgba(245,245,245,0.9)',
        xAxis: {
          data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
        },
        yAxis: {},
        series: [{
          name: '民意',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20,23,24,15,26,65,37,67,25,78,29]
        },
          {
            name: '呵呵',
            type: 'line',
            data: [15, 10, 26, 30, 40, 20,24,28,19,20,35,27,37,15,36,15]
          }
        ]
      },
      dataset3:{
        title: {
          text: '台湾历年统独议题民意趋势'
        },
        tooltip: { },
        legend: {
          top:10,
          right:50,
          data:['民意','呵呵']
        },
        backgroundColor:'rgba(245,245,245,0.9)',
        xAxis: {
          data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
        },
        yAxis: {},
        series: [{
          name: '民意',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20,23,24,15,26,65,37,67,25,78,29]
        },
          {
            name: '呵呵',
            type: 'line',
            data: [15, 10, 26, 30, 40, 20,24,28,19,20,35,27,37,15,36,15]
          }
        ]
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{


  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mapT{ width: 70%; margin: 0 15%; height:auto; }
  .rightContent{ width: 87%; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }
  .chartsH { width: 100%;  height:340px; background:rgba(245,245,245,0.9); }

</style>

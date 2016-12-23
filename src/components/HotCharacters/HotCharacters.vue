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
              Panel content<br><br><br><br><br><br><br>


              <div class="chart" v-echarts="barChartOption"></div>



              <br><br><br><br><br><br><br><br><br><br><br><br>

            </div>

          </div>

        </div>

      </div>



    </div>


  </div>


</template>
<script type="text/ecmascript-6">
  import HeaderNav from '../Header/Header.vue';
  import * as Api  from '../../configs/Api';



export default {
  name: 'Hot',
  data () {
    return {
      userName: '',
      sentimentLineLoading:false,
      barChartOption :{
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
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

    HeaderNav
  },
  mounted(){

























      this.$http.jsonp("http://118.244.212.122:8008/topic/list",
        {　　　　//请求参数
        }).then(function(res){

        console.log('rt',res.data);

      },function(){
        //console.log(1)
      });

      console.log('1111111111111111112');

      Api.getMonitorList( ).then(resp => {
        //console.log(resp.data);
        if(resp.data.code == 0){

          console.log("qw",resp.data.data);
        }});


    const start='2016-12-16';
    const end='2016-12-23';
    const topic='陈赫';
    const subtopic='家丁';

    Api.getMediaWordcloud({topic, subtopic, start, end}).then(resp => {
      if(resp.data.code ==0){
        const mediaData = resp.data.data;

        console.log('weakj:',resp.data.data);
      }
    });






      console.log('这是mounted的方法');},
  methods: {

      myjsonp(){








      }



}


}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .HotCharacters{ width: 100%; height: auto; }
  .rightContent{ width: 100%; height:600px; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }
  .mycharts {  height:600px; width: 1000px; }

</style>

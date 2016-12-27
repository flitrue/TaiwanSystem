<template>
<div class="HotCharacters">
  <header-nav> </header-nav>
  <div class="container rightContent">

    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">

          <div class="chart" v-echarts="{option:ChartOption ,click:Chartclick,theme: 'macarons' }"></div>
          <div class="carousel-caption"></div>
        </div>
        <div class="item">
          <div class="chart" v-echarts="{option: themeLineOption ,theme: 'macarons' }"></div>
          <div class="carousel-caption"></div>
        </div>
        <div class="item">
          <div class="chart" v-echarts="{option:ChartOption ,click:Chartclick,theme: 'macarons' }"></div>
          <div class="carousel-caption"></div>
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev"></a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next"></a>
    </div>
  </div>

</div>






</template>
<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import '../../../node_modules/echarts/theme/roma';
  import HeaderNav from '../Header/Header.vue';
  import * as Api  from '../../configs/Api';

export default {
  name: 'Hot',
  data () {
    return {
      userName: '',
      nodeData:[
        {id:1,value:2,symbolSize:0,name:'蔡英文1',category:'0'},
        {id:2,value:2,symbolSize:30,name:'蔡英文2',category:'0'},
        {id:3,value:2,symbolSize:30,name:'蔡英文3',category:'0'},
        {id:4,value:2,symbolSize:40,name:'蔡英文4',category:'0'},
        {id:5,value:2,symbolSize:18,name:'蔡英文5',category:'0'},
        {id:6,value:2,symbolSize:40,name:'蔡英文6',category:0},
        {id:7,value:2,symbolSize:20,name:'wer',category:'1'},
        {id:8,value:2,symbolSize:20,name:'',category:'1'},
        {id:9,value:2,symbolSize:20,name:'',category:'1'},
        {id:10,value:2,symbolSize:20,name:'',category:'0'},
        {id:11,value:2,symbolSize:20,name:'',category:'2'},
        {id:12,value:2,symbolSize:20,name:'',category:'2'},
        {id:13,value:2,symbolSize:20,name:'',category:'1'},
        {id:14,value:2,symbolSize:20,name:'',category:'1'},
        {id:15,value:2,symbolSize:20,name:'',category:'1'},
        {id:16,value:2,symbolSize:10,name:'',category:'1'},
        {id:17,value:2,symbolSize:22,name:'',category:'1'},
        {id:18,value:2,symbolSize:20,name:'',category:'2'},
        {id:19,value:2,symbolSize:20,name:'',category:'0'},
        {id:20,value:2,symbolSize:20,name:'',category:'0'},
        {id:21,value:2,symbolSize:20,name:'',category:'2'},
        {id:22,value:2,symbolSize:20,name:'',category:'2'},
        {id:23,value:2,symbolSize:20,name:'',category:'1'},
        {id:24,value:2,symbolSize:20,name:'',category:'1'},
        {id:25,value:2,symbolSize:20,name:'',category:'1'},
        {id:26,value:2,symbolSize:10,name:'',category:'1'},
        {id:27,value:2,symbolSize:22,name:'',category:'1'},
        {id:28,value:2,symbolSize:20,name:'',category:'2'},
        {id:29,value:2,symbolSize:20,name:'',category:'0'},
        {id:30,value:2,symbolSize:20,name:'',category:'0'},
        {id:31,value:2,symbolSize:20,name:'',category:'2'},
        {id:32,value:2,symbolSize:20,name:'',category:'2'},
        {id:33,value:2,symbolSize:20,name:'',category:'1'},
        {id:34,value:2,symbolSize:20,name:'',category:'1'},
        {id:35,value:2,symbolSize:20,name:'',category:'1'},
        {id:36,value:2,symbolSize:10,name:'',category:'1'},
        {id:37,value:2,symbolSize:22,name:'',category:'1'},
        {id:38,value:2,symbolSize:20,name:'',category:'0'},

        {id:39,value:2,symbolSize:20,name:'',category:'0'},
        {id:40,value:2,symbolSize:20,name:'',category:'0'},
        {id:41,value:2,symbolSize:20,name:'',category:'2'},
        {id:42,value:2,symbolSize:20,name:'',category:'2'},
        {id:43,value:2,symbolSize:20,name:'',category:'1'},
        {id:44,value:2,symbolSize:20,name:'',category:'1'},
        {id:45,value:2,symbolSize:20,name:'',category:'1'},
        {id:46,value:2,symbolSize:10,name:'',category:'1'},
        {id:47,value:2,symbolSize:22,name:'',category:'1'},
        {id:48,value:2,symbolSize:20,name:'',category:'2'},
        {id:49,value:2,symbolSize:20,name:'',category:'2'},
        {id:50,value:2,symbolSize:20,name:'',category:'2'},
        {id:51,value:2,symbolSize:20,name:'',category:'2'},
        {id:52,value:2,symbolSize:20,name:'',category:'2'},
        {id:53,value:2,symbolSize:20,name:'',category:'2'},
        {id:54,value:2,symbolSize:20,name:'',category:'2'},
        {id:55,value:2,symbolSize:20,name:'',category:'2'},

      ],
      edgeData:[

        {'source':1,'target':7,'weight':0.25},
        {'source':1,'target':8,'weight':0.25},
        {'source':1,'target':9,'weight':0.83},
        {'source':1,'target':10,'weight':0.5},
        {'source':1,'target':11,'weight':0.25},
        {'source':1,'target':12,'weight':0.33},
        {'source':1,'target':13,'weight':0.2},
        {'source':1,'target':14,'weight':0.75},
        {'source':1,'target':15,'weight':0.16},
        {'source':1,'target':16,'weight':1.5},

        {'source':2,'target':17,'weight':2.75},
        {'source':2,'target':18,'weight':0.33},
        {'source':2,'target':19,'weight':0.2},
        {'source':2,'target':21,'weight':0.5},
        {'source':2,'target':20,'weight':0.5},
        {'source':2,'target':22,'weight':0.9},
        {'source':2,'target':23,'weight':0.53},
        {'source':2,'target':24,'weight':0.2},
        {'source':2,'target':25,'weight':0.2},
        {'source':2,'target':26,'weight':0.2},

        {'source':3,'target':27,'weight':2.75},
        {'source':3,'target':28,'weight':0.33},
        {'source':3,'target':29,'weight':0.2},
        {'source':3,'target':31,'weight':0.5},
        {'source':3,'target':32,'weight':0.5},
        {'source':3,'target':33,'weight':0.9},

        {'source':4,'target':34,'weight':0.3},
        {'source':4,'target':35,'weight':0.2},
        {'source':4,'target':36,'weight':0.2},
        {'source':4,'target':37,'weight':0.2},
        {'source':5,'target':38,'weight':0.2},
        {'source':5,'target':39,'weight':0.2},
        {'source':5,'target':40,'weight':0.2},

        {'source':5,'target':41,'weight':0.2},
        {'source':5,'target':42,'weight':0.2},
        {'source':5,'target':43,'weight':0.2},
        {'source':5,'target':44,'weight':0.2},
        {'source':5,'target':45,'weight':0.2},
        {'source':5,'target':46,'weight':0.2},
        {'source':5,'target':47,'weight':0.2},
        {'source':5,'target':48,'weight':0.5},
        {'source':6,'target':49,'weight':8.56,},
        {'source':6,'target':49,'weight':0.125},
        {'source':6,'target':50,'weight':0.125},
        {'source':6,'target':51,'weight':0.2},
        {'source':6,'target':52,'weight':0.5},
        {'source':6,'target':53,'weight':0.2},],
      itemStyle:{
        normal: {
          shadowColor: 'rgba(220, 220, 220, 0.3)',
          shadowBlur: 10,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        }
      },
      sentimentLineLoading:false,
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
      ChartOption :{
        title: [{
          text: 'With Modularity',
          left: '5%',
          top: '3%',
          textAlign: 'center'
        }],
        animation: true,
        backgroundColor:new echarts.graphic.RadialGradient(0.5, 0.5, 0.88, [{
          offset: 0, color: 'rgba(0,0,0,0.6)' // 0% 处的颜色
        }, {
          offset: 1, color: 'rgba(4,22,35,0.2)' // 100% 处的颜色
        }], false),
        series: [{
          name: 'With Modularity',
          color:["#efbf09","#bc3c3c","#3fea21","#21ead9","#214bea","#9521ea","#ea21d9"],
          categories:[{"name":"传播源点"},{"name":"一层转发"},{"name":"二层转发"},{"name":"三层转发"},{"name":"四层转发"},{"name":"五层转发"},{"name":"六层转发"},{"name":"七层转发"},{"name":"七层以上"}],
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 100,
            gravity: 0.1,
            layoutAnimation:true,
          },
          draggable: true,
          data:[
            {id:1,value:1,symbolSize:0,name:'蔡英文1',category:'0',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:2,value:2,symbolSize:30,name:'蔡英文2',category:'0',itemStyle:{normal:{color:'#214bea',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:3,value:2,symbolSize:30,name:'蔡英文3',category:'0',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:4,value:2,symbolSize:40,name:'蔡英文4',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:5,value:2,symbolSize:18,name:'蔡英文5',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:6,value:2,symbolSize:40,name:'蔡英文6',category:0,itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:7,value:2,symbolSize:20,name:'wer',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:8,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:9,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:10,value:2,symbolSize:20,name:'',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:11,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:12,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:13,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:14,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:15,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:16,value:2,symbolSize:10,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:17,value:2,symbolSize:22,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:18,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:19,value:2,symbolSize:20,name:'',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:20,value:2,symbolSize:20,name:'',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:21,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:22,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:23,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:24,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:25,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:26,value:2,symbolSize:10,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:27,value:2,symbolSize:22,name:'',category:'1',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:28,value:2,symbolSize:20,name:'',category:'2',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:29,value:1,symbolSize:20,name:'',category:'0',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:30,value:2,symbolSize:20,name:'',category:'0',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:31,value:3,symbolSize:20,name:'',category:'2',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:32,value:4,symbolSize:20,name:'',category:'2',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:33,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{color:'#21ead9',shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:34,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:35,value:2,symbolSize:20,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:36,value:2,symbolSize:10,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:37,value:2,symbolSize:22,name:'',category:'1',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},
            {id:38,value:2,symbolSize:20,name:'',category:'0',itemStyle:{normal:{shadowColor: 'rgba(220, 220, 220, 0.3)', shadowBlur: 10, shadowOffsetX: 1, shadowOffsetY: 1}}},

            {id:39,value:2,symbolSize:20,name:'',category:'0'},
            {id:40,value:2,symbolSize:20,name:'',category:'0'},
            {id:41,value:2,symbolSize:20,name:'',category:'2'},
            {id:42,value:2,symbolSize:20,name:'',category:'2'},
            {id:43,value:2,symbolSize:20,name:'',category:'1'},
            {id:44,value:2,symbolSize:20,name:'',category:'1'},
            {id:45,value:2,symbolSize:20,name:'',category:'1'},
            {id:46,value:2,symbolSize:10,name:'',category:'1'},
            {id:47,value:2,symbolSize:22,name:'',category:'1'},
            {id:48,value:2,symbolSize:20,name:'',category:'2'},
            {id:49,value:2,symbolSize:20,name:'',category:'2'},
            {id:50,value:2,symbolSize:20,name:'',category:'2'},
            {id:51,value:2,symbolSize:20,name:'',category:'2'},
            {id:52,value:2,symbolSize:20,name:'',category:'2'},
            {id:53,value:2,symbolSize:20,name:'',category:'2'},
            {id:54,value:2,symbolSize:20,name:'',category:'2'},
            {id:55,value:2,symbolSize:20,name:'',category:'2'},

          ],
          links:[

            {'source':1,'target':7,'weight':0.25},
            {'source':1,'target':8,'weight':0.25},
            {'source':1,'target':9,'weight':0.83},
            {'source':1,'target':10,'weight':0.5},
            {'source':1,'target':11,'weight':0.25},
            {'source':1,'target':12,'weight':0.33},
            {'source':1,'target':13,'weight':0.2},
            {'source':1,'target':14,'weight':0.75},
            {'source':1,'target':15,'weight':0.16},
            {'source':1,'target':16,'weight':1.5},

            {'source':2,'target':17,'weight':2.75},
            {'source':2,'target':18,'weight':0.33},
            {'source':2,'target':19,'weight':0.2},
            {'source':2,'target':21,'weight':0.5},
            {'source':2,'target':20,'weight':0.5},
            {'source':2,'target':22,'weight':0.9},
            {'source':2,'target':23,'weight':0.53},
            {'source':2,'target':24,'weight':0.2},
            {'source':2,'target':25,'weight':0.2},
            {'source':2,'target':26,'weight':0.2},

            {'source':3,'target':27,'weight':2.75},
            {'source':3,'target':28,'weight':0.33},
            {'source':3,'target':29,'weight':0.2},
            {'source':3,'target':31,'weight':0.5},
            {'source':3,'target':32,'weight':0.5},
            {'source':3,'target':33,'weight':0.9},

            {'source':4,'target':34,'weight':0.3},
            {'source':4,'target':35,'weight':0.2},
            {'source':4,'target':36,'weight':0.2},
            {'source':4,'target':37,'weight':0.2},
            {'source':5,'target':38,'weight':0.2},
            {'source':5,'target':39,'weight':0.2},
            {'source':5,'target':40,'weight':0.2},

            {'source':5,'target':41,'weight':0.2},
            {'source':5,'target':42,'weight':0.2},
            {'source':5,'target':43,'weight':0.2},
            {'source':5,'target':44,'weight':0.2},
            {'source':5,'target':45,'weight':0.2},
            {'source':5,'target':46,'weight':0.2},
            {'source':5,'target':47,'weight':0.2},
            {'source':5,'target':48,'weight':0.5},
            {'source':6,'target':49,'weight':8.5},
            {'source':6,'target':49,'weight':0.1},
            {'source':6,'target':50,'weight':0.5},
            {'source':6,'target':51,'weight':0.2},
            {'source':6,'target':52,'weight':0.5},
            {'source':6,'target':53,'weight':0.2},],
          roam: true,
          label: {
            normal: {
              show:true,
              position:'inside',
              textStyle: {
                color: 'rgba(222,222,222,0.8)',
                fontSize: 16}
            }
          },
          left: '0%',
          top: 0,
          width: '100%',
          bottom: 0,
          lineStyle: {
            normal: {
              width:0
            }
          }
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

//      this.ChartOption.series.edges=this.edgeData;
//      this.ChartOption.series.data=this.nodeData;





      this.$http.jsonp("http://118.244.212.122:8008/topic/list",
        {　　　　//请求参数
        }).then(function(res){

        console.log('rt',res.data);

      },function(){
        //console.log(1)
      });

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
    Chartclick(params){
      window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));

    },
  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .HotCharacters{ width: 100%; height: auto; }
  .rightContent{ width: 100%; height:600px; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }
  .chart {  height:800px; width:1400px; margin:0 auto;  }
  .carousel-control{ width: 6%;}

</style>

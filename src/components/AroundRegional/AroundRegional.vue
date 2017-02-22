<template>

    <div class="container rightContent">
      <div class="row">
        <div class="col-xs-12 col-md-12 pull-left ">
          <ol class="breadcrumb panel-t " >
            <li><a href="#">AroundRegional</a></li>
            <li><a href="#">2016</a></li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 col-sm-12 ">

          <d3tree :data="data" class="tree"></d3tree>


        </div>


      </div>

      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-6 col-sm-12 ">
          <div class="panel panel-info ">
            <div class="panel-heading panel-t ">Panel title</div>
            <div class="panel-body">
              Panel content<br><br><br><br><br><br><br>
            </div>

          </div>

        </div>
        <div class="col-xs-12 col-md-6 col-lg-6 col-sm-12 ">
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
  import D3tree from '../D3tree.vue'
  import data from '../data.json'
  Object.assign(data, {type: 'tree', duration: 750})

export default {
  name: 'AroundRegional',
  data () {
    return {
        data,
      userName: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components:{
    D3tree


  },
  methods: {

      asda(){  console.log('12'); }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .home{ width: 100%; height: auto; }
  .leftNav{ width: 13%;float: left; }
  .rightContent{ width: 87%; float: left; margin-top: 15px;}
  .panel-t{ text-align: left; border-radius:0px; }
  .tree {
    height: 500px;
    width: 100%;
  }

</style>

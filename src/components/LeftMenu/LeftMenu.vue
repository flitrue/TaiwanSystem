<template>

  <div class="panel-group pull-left" id="accordion">
	<div class="panel panel-default">
		<div class="panel-heading">

      <router-link to="/">首页

      </router-link>
		</div>

	</div>
	<div class="panel panel-default">
		<div class="panel-heading">

				<a data-toggle="collapse" data-parent="#accordion"
				   href="#collapseTwo">
					政情信息
				</a>

		</div>
		<div id="collapseTwo" class="panel-collapse collapse">

        <ul>
          <router-link to="/"><li class="panel-heading">政情信息1</li></router-link>
          <router-link to="/"><li class="panel-heading">政情信息2</li></router-link>
          <router-link to="/"><li class="panel-heading">政情信息3</li></router-link>

        </ul>

		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">

				<a data-toggle="collapse" data-parent="#accordion"
				   href="#collapseThree">
          图表分析
				</a>

		</div>
		<div id="collapseThree" class="panel-collapse collapse">

        <ul>
          <li class="panel-heading">图表分析1</li>
          <li class="panel-heading">图表分析2</li>
          <li class="panel-heading">图表分析3</li>
        </ul>
			</div>
	</div>
  <div class="panel panel-default">
    <div class="panel-heading">

      <a data-toggle="collapse" data-parent="#accordion"
         href="#collapseFore">
        预警通知
      </a>

    </div>
    <div id="collapseFore" class="panel-collapse collapse">

      <ul>
        <li class="panel-heading">预警通知1</li>
        <li class="panel-heading">预警通知2</li>
        <li class="panel-heading">预警通知3</li>
      </ul>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">

      <a data-toggle="collapse" data-parent="#accordion"
         href="#collapseFire">
        事件跟踪
      </a>

    </div>
    <div id="collapseFire" class="panel-collapse collapse">
      <ul>
        <li class="panel-heading">事件跟踪1</li>
        <li class="panel-heading">事件跟踪2</li>
        <li class="panel-heading">事件跟踪3</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'LeftMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #accordion{ width:100%; min-width: 160px; }
  .panel-heading,.panel{ border-radius: 0px; margin-top:1px; color: #2c3e50; }
  .panel-group .panel-default{margin-top:2px; border:0px;    }
  .panel-collapse ul { list-style: none; padding-left: -10px; }
  /*panel-group .panel + .panel*/




</style>

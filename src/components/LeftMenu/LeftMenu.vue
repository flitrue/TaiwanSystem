<template>

  <div class="panel-group pull-left" id="accordion">
	<div class="panel panel-default">
		<div class="panel-heading">

				<a data-toggle="collapse" data-parent="#accordion"
				   href="#collapseOne">
					舆情监测
				</a>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
      <ul>
        <li class="panel-heading"> 舆情监测1</li>
        <li class="panel-heading"> 舆情监测2</li>
        <li class="panel-heading"> 舆情监测3</li>
      </ul>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">

				<a data-toggle="collapse" data-parent="#accordion"
				   href="#collapseTwo">
					热点事件
				</a>

		</div>
		<div id="collapseTwo" class="panel-collapse collapse">

        <ul>
          <li class="panel-heading">舆情监测1</li>
          <li class="panel-heading">舆情监测2</li>
          <li class="panel-heading">舆情监测3</li>
        </ul>

		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">

				<a data-toggle="collapse" data-parent="#accordion"
				   href="#collapseThree">
          监测预警
				</a>

		</div>
		<div id="collapseThree" class="panel-collapse collapse">

        <ul>
          <li class="panel-heading">舆情监测1</li>
          <li class="panel-heading">舆情监测2</li>
          <li class="panel-heading">舆情监测3</li>
        </ul>
			</div>
	</div>
  <div class="panel panel-default">
    <div class="panel-heading">

      <a data-toggle="collapse" data-parent="#accordion"
         href="#collapseFore">
        监测预警
      </a>

    </div>
    <div id="collapseFore" class="panel-collapse collapse">

      <ul>
        <li class="panel-heading">舆情监测1</li>
        <li class="panel-heading">舆情监测2</li>
        <li class="panel-heading">舆情监测3</li>
      </ul>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">

      <a data-toggle="collapse" data-parent="#accordion"
         href="#collapseFire">
        监测预警
      </a>

    </div>
    <div id="collapseFire" class="panel-collapse collapse">

      <ul>
        <li class="panel-heading">舆情监测1</li>
        <li class="panel-heading">舆情监测2</li>
        <li class="panel-heading">舆情监测3</li>
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
  #accordion{ width:10%; min-width: 160px; }
  .panel-heading,.panel{ border-radius: 0px; margin-top:1px; color: #2c3e50; }
  .panel-group .panel-default{margin-top:2px; border:0px; border-top: 1px solid rgba(120,120,120,0.2);   }
  .panel-collapse ul { list-style: none; padding-left: -10px; }
  /*panel-group .panel + .panel*/




</style>

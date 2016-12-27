/**
 * Created by wanglipeng on 2016/12/26.
 */

import Vue from 'vue';
import echarts from 'echarts';
import infographic from '../../node_modules/echarts/theme/infographic';
import dark from '../../node_modules/echarts/theme/dark';
import vintage from '../../node_modules/echarts/theme/vintage';
import def from '../../node_modules/echarts/theme/default';
import macarons from '../../node_modules/echarts/theme/macarons';
import WordCloud from '../../node_modules/echarts-wordcloud';

module.exports = {

    bind: function (el,binding,vnode) {
      var _this = binding;
      var _option = binding.value.option;

        Vue.nextTick(function () {

            var drawCharts= echarts.init(el,'infographic');
            drawCharts.setOption(_option);
            window.onresize = drawCharts.resize;
            // add echart click Event
            if(binding.value.click){
              drawCharts.on('dblclick', binding.value.click);
            }
            // show loading animation
            // if (_this.params.loading === true) {
            //     _this.instance.showLoading();
            // }

            // // auto resize

        });
    },
    // update: function (val, oldVal) {
    //     var _this = binding;
    //
    //
    //     Vue.nextTick(function () {
    //         _this.instance.setOption(options,true);
    //         _this.params.img = _this.instance.getDataURL("jpg");
    //         //console.log(_this.instance.getDataURL("jpg"));
    //         if(options.series.type != 'wordCloud' || _.some(options.series, item => {return item.type == 'wordCloud'})){
    //             _this.instance.resize();
    //         }
    //     });
    // },
    // unbind: function () {
    //     var _this = binding;
    //
    //     _this.instance.dispose();
    //
    //     _this.el.removeEventListener('resize', _this.resizeEventHandler, false);
    // }
};

/**
 * Created by wanglipeng on 2016/12/26.
 */


import Vue from 'vue';
import echarts from 'echarts';
import infographic from '../../node_modules/echarts/theme/infographic';
import dark from '../../node_modules/echarts/theme/dark';
import vintage from '../../node_modules/echarts/theme/vintage';
import roma from '../../node_modules/echarts/theme/roma';
import def from '../../node_modules/echarts/theme/default';
import macarons from '../../node_modules/echarts/theme/macarons';
import WordCloud from '../../node_modules/echarts-wordcloud';

module.exports = {

    params: ['loading', 'resize', 'theme', 'click', 'img'],
    paramWatchers: {
        loading: function (val, oldVal) {
            var _this = binding;

            if (val === true) {
                _this.instance.showLoading();
            } else {
                _this.instance.hideLoading();
            }
        },
        resize: function(val, oldVal){
            if(val != oldVal){
                var _this = binding;
                _this.instance.resize();
            }
        },
    },

    bind: function (a) {
        var _this = binding;

        Vue.nextTick(function () {
            // init echarts instance
            var theme = _this.params.theme ;
            _this.instance = echarts.init(_this.el, theme);

            // add echart click Event
            if(_this.params.click){
                _this.instance.on('click', _this.params.click);
            }

            // show loading animation
            if (_this.params.loading === true) {
                _this.instance.showLoading();
            }

            // auto resize
            var resizeEvent = new Event('resize');

            _this.resizeEventHandler = function () {
                _this.instance.resize();
            };

            _this.el.addEventListener('resize', _this.resizeEventHandler, false);

            window.onresize = function () {
                _this.el.dispatchEvent(resizeEvent);
            };
        });
    },
    update: function (val, oldVal) {
        var _this = binding;
        var options = val;

        Vue.nextTick(function () {
            _this.instance.setOption(options,true);
            _this.params.img = _this.instance.getDataURL("jpg");
            //console.log(_this.instance.getDataURL("jpg"));
            if(options.series.type != 'wordCloud' || _.some(options.series, item => {return item.type == 'wordCloud'})){
                _this.instance.resize();
            }
        });
    },
    unbind: function () {
        var _this = binding;

        _this.instance.dispose();

        _this.el.removeEventListener('resize', _this.resizeEventHandler, false);
    }
};

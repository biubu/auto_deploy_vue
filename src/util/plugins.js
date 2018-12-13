export default {
    install(Vue) {

        /*初始化图表
          * 参数: chartDom: 一个DOM对象,在vue中请通过ref绑定,
        *     option: echart 配置的option
        * */
        Vue.prototype.$initCharts = (chartDom, option) => {

            let chart = Vue.prototype.$echarts.init(chartDom);
            chart.setOption(option);
            // 图表对象响应式设置
            window.addEventListener('resize', () => {
                chart.resize();
            });

            return chart;
        };
    }
};

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import plugins from './util/plugins';

Vue.use(plugins);
Vue.config.productionTip = false;

// 通过读取components文件夹下的文件引入组件,不在需要每个都去import一遍,再去注册了;

/* 参数: 文件路径,是否遍历子目录,正则表达式匹配文件类型 */
const requireComponent = require.context('@/components/', true, /\.vue$/);

/*遍历文件名,并注册*/
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    let name = fileName.split('/');
    let componentName = name[name.length - 1].replace('.vue', '');
    Vue.component(componentName, componentConfig.default || componentConfig);
});



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

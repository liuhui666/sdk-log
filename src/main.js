import Vue from 'vue';
import ElementUI from 'element-ui';
import Home from './views/Home.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';// 引用ui样式

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Home),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routerConfig';
import store from './store/index';
import axios from 'axios';
import Loading from './components/loading';
import filters from './filters/index.js';
/*Vue.filter(名字, 函数)*/
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
Vue.use(VueRouter);
Vue.use(Loading);
require('./assets/css/base.css');//全局样式
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$http = axios;
const router=new VueRouter({
	mode: 'history', 
	scrollBehavior: ()=>({y:0}),
	routes
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

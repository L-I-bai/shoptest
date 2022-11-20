import Vue from 'vue'
import App from './App.vue'

//三级联动组件+全局组件
import TypeNav from './components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import Pagination from './components/Pagination'
Vue.component('Pagination', Pagination)

import VueRouter from 'vue-router'
import router from './router'
//引入mockserver.js----mock数据
import './mock/mockserver.js'
//引入轮播图
import"swiper/css/swiper.css"
//引入仓库
import store from './store'

import *as API from './api'
import {reqCategoryList} from './api/index.js'
reqCategoryList();

import {reqGetSearchInfo} from './api/index.js'
reqGetSearchInfo();
Vue.config.productionTip = false
Vue.use(VueRouter)

//引入element-ui
import {Button,MessageBox} from 'element-ui';
Vue.component(Button.name, Button);
Vue.prototype.$magbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  render: h => h(App),
  beforeCreate() {
  	Vue.prototype.$bus = this
	Vue.prototype.$API = API
  },
  router:router,
  store:store
}).$mount('#app')

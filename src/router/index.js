//配置路由
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
import store from "../store/index.js"

import Login from '../pages/Login'
import Home from  '../pages/Home'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay/index.vue'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'

//引入二级路由组件
import MyOrder from '../pages/Center/myOrder.vue'
import GroupOrder from '../pages/Center/groupOrder.vue'
let router = new VueRouter({
	routes:[
		{
		path:'/center',
		component:Center,
		meta:{show:true},
		name:'center',
		children:[
			{
				path:'/myorder',
				component:MyOrder
			},
			{
				path:'/grouporder',
				component:GroupOrder
			},
			/* {
				path:'/center',
				redirect:'/center/myorder'
			} */
		]
		},
		{
		path:'/paysuccess',
		component:PaySuccess,
		meta:{show:true},
		name:'paysuccess'
		},
		{
		path:'/pay',
		component:Pay,
		meta:{show:true},
		name:'pay'
		},
		{
		path:'/trade',
		component:Trade,
		meta:{show:true},
		name:'trade'
		},
		{
		path:'/shopcart',
		component:ShopCart,
		meta:{show:true},
		name:'shopcart'
		},
		{
		path:'/addcartsuccess',
		component:AddCartSuccess,
		meta:{show:true},
		name:'addcartsuccess'
		},
		{
			path:'/detail/:skuid?',
			component:Detail,
			meta:{show:true},
		},
		{
			path:'/login',
			component:Login,
			meta:{show:false},
		},
		{
			path:'/home',
			component:Home,
			meta:{show:true},
		},
		{
			path:'/register',
			component:Register,
			meta:{show:false},
		},
		{
			path:'/search/:keyword?',
			component:Search,
			meta:{show:true},
			name:'search'
		},
		{
			path:'*',
			redirect:"/home",
		}
	]
})

//全局守卫to:获取跳转到哪个路由信息，from：获取从哪个路由来，next：放行函数
/* router.beforeEach(async (to,from,next)=>{
	let token=store.state.user.token
	let name = store.state.user.userInfo.name
	
	if(token){
		if(to.path=='/login'||to.path=='/register'){
			next('/')
			console.log(111)
		}else{
			if(name){
				next()
			}else{
				//没有用户信息，从仓库获取信息后跳转
				try{
				  await store.dispatch('getUserInfo')
					next()
				}catch(e){
					await store.dispatch('userLogout')
					next('/login')
				}
			}
		}
	}else{
		let toPath = to.path
		if(toPath.indexOf('/trade')!= -1 || toPath.indexOf('/pay')!= -1 ||toPath.indexOf('/center')!= -1){
			next('/login')
		}else{
			next()
		}
	 }
}) */

export default router;
import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

//state:仓库存储数据的地方

import home from './home.js'
import search from './search.js'
import detail from './detail.js'
import cartList from './cartList.js'
import user from './user.js'
import trade from './trade.js'
export default new Vuex.Store({
	modules:{
		home,
		search,
		detail,
		cartList,
		user,
		trade
	}
})
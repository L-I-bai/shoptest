import {reqShopcart,reqdeleteCart,reqChecked} from "../api/index.js"

const state = {
	cartList:[]
};
const mutations = {
	GETCARTLIST(state,cartList){
		state.cartList = cartList
	}
};
const actions = {
	//获取购物车列表数据
	async getcartList({commit}) {
		let result = await reqShopcart();
		 if (result.code == 200) {
			commit("GETCARTLIST", result.data)
		} 
	},
	//删除购物车某一个产品
	async deleteCartList({commit},skuId){
		let result = await reqdeleteCart(skuId)
		if (result.code == 200) {
			return 'ok'
		} else{
			return Promise.reject(new Error('faile'))
		}
	},
	//修改购物车产品的选中状态
	async updateChecked({commit},{skuId,isChecked}){
		let result = await reqChecked(skuId,isChecked)
		if (result.code == 200) {
			return 'ok'
		} else{
			return Promise.reject(new Error('faile'))
		}
	},
	//删除全部勾选的产品
	deleteAllChecked({dispatch,getters}){
		let PromiseA=[]
		getters.cartList.cartInfoList.forEach(item=>{
			let result= item.isChecked==1?dispatch('deleteCartList',item.skuId):''
			PromiseA.push(result);
		})
		return Promise.all(PromiseA)
	},
	updateAllChecked({dispatch,state},isChecked){
			let promiseA=[]
			state.cartList[0].cartInfoList.forEach(item=>{
			let result=	dispatch('updateChecked',{skuId: item.skuId,isChecked})
				promiseA.push(result)
			})
			return Promise.all(promiseA)
		}
};
const getters = {
	cartList(){
		return state.cartList[0]||{}
	},
	cartInfoList(state){
		return state
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}

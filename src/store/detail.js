import {reqGoodsinfo,reqcartList} from "../api/index.js"
//封装的临时身份模块uuid生成一个随机字符串
import {getUUID} from '../pages/utils/uuid_token'
const state = {
	goodInfo:{},
	uuid_token:getUUID()
};
const mutations = {
	GETGOODINFO(state, goodInfo) {
		state.goodInfo = goodInfo
	}
};
const actions = {
	async getGoodinfo({commit},skuId) {
		let result = await reqGoodsinfo(skuId);
		if (result.code == 200) {
			commit("GETGOODINFO", result.data)
		}
	},
	//将产品添加到购物车中
	async addshopcartlist({commit},{skuId,skuNum}){
		let result = await reqcartList(skuId,skuNum);
		if (result.code == 200){
			return 'ok'
		}else{
			//代表加入购物车失败
			return Promise.reject(new Error('faile'))
		}
		
	}
};


const getters = {
	//简化路径导航的数据
	categoryView(state){
		return state.goodInfo.categoryView||{}
	},
	//简化产品信息的数据
	skuInfo(state){
		return state.goodInfo.skuInfo||{}
	},
	//简化产品售卖属性的数据
	spuSaleAttrList(){
		return state.goodInfo.spuSaleAttrList||[]
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}

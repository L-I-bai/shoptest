import { reqGetSearchInfo } from "../api/index.js"

//search模块的仓库
const state={
	searchList:{}
}

const mutations = {
	CATGORYLIST(state,searchList) {
		state.searchList = searchList;
	}
}
const actions = {
	async getSearchList({commit},params={}) {
		let result = await reqGetSearchInfo(params);

		if (result.code == 200) {
			commit("CATGORYLIST", result.data)
		}
		 window.localStorage.setItem("list",JSON.stringify(result))
		// console.log("list")
	},
}
const getters={
	attrsList(state){
		return state.searchList.attrsList
	 },
	goodsList(state){
		return state.searchList.goodsList
	},
	trademarkList(state){
		return state.searchList.trademarkList
	} 
}
export default{
	state,
	mutations,
	actions,
	getters
}
import {
	reqCategoryList,
	reqGetBannerList,
	reqFloorList
} from "../api/index.js"

const state = {
	categoryList: [],
	bannerList: [],
	floorlist:[]
};
const mutations = {
	CATGORYLIST(state, categoryList) {
		state.categoryList = categoryList;
	},
	 BANNERLIST(state, bannerList) {
		state.bannerList = bannerList;
	}, 
	FLOORLIST(state,floorlist){
		state.floorlist = floorlist;
	} 
};
const actions = {
	async categoryList({commit}) {
		let result = await reqCategoryList();
		
		if (result.code == 200) {
			commit("CATGORYLIST", result.data)
		}
	},
	async getBannerList({commit}) {
		let result = await reqGetBannerList();
		if (result.code == 200) {
			commit("BANNERLIST", result.data);
		}
	},
	async getFloorList({commit}) {
		let result = await reqFloorList();
		
		if (result.code == 200) {
			commit("FLOORLIST", result.data)
		}
	},
};
const getters = {};
export default {
	state,
	mutations,
	actions,
	getters
}

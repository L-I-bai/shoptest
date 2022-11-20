//登录和注册
import {reqGetCode,reqUserRegister,reqUserLogin,tokenLogin,reqLogout} from "../api/index.js"

//search模块的仓库
const state={
	code:"",
	//token:localStorage.getItem("TOKEN"),
	token:'',
	userInfo:{}
}
const mutations = {
	GETCODE(state,code){
		state.code = code
	},
	USERLOGIN(state,token){
		state.token=token
	},
	GETUSERINFO(state,userInfo){
		state.userInfo=userInfo
	},
	CLEARUSER(state){
		state.code='',
		state.userInfo={}
		state.token=localStorage.removeItem("TOKEN")
	}
}
const actions = {
	//vue-vuex中使用commit提交mutation来修改state的方法
	async getCode({commit},phone){
		let result = await reqGetCode(phone)
		if (result.code == 200) {
			commit("GETCODE", result.data)
			return 'OK'
		}else{
			return Promise.reject(new Error('faile'))
		}
	},
	//注册
	async userRegister({commit},user){
		let result = await reqUserRegister(user)
		console.log(result)
		if (result.code == 200) {
			return 'ok'
		} else{
			return Promise.reject(new Error('faile'))
		}
	},
	//登录
	async userLogin({commit},data){
		let result = await reqUserLogin(data)
		console.log(result)
		if (result.code == 200) {
			commit("USERLOGIN", result.data.token)
			//持久化存储token
			localStorage.setItem("TOKEN",result.data.token)
			return 'ok'
		} else{
			return Promise.reject(new Error('faile'))
		}
	},
	//获取用户信息
	async getUserInfo({commit}){
		let result = await tokenLogin()
		
		if (result.code == 200) {
			//用户已成功并获得token
			commit("GETUSERINFO", result.data)
		}
	},
	//退出登录
	async userLogout({commit}){
		let result = await reqLogout()
		console.log(result)
		if (result.code == 200) {
			//用户已成功并获得token
			commit("CLEARUSER", result.data)
		}
	}
}
const getters={
	
}
export default{
	state,
	mutations,
	actions,
	getters
}
import requests from "./request"
import mockrequests from "./mockajax.js"

export const reqCategoryList=()=>requests({
		url:'/product/getBaseCategoryList',
		method:'get',
		});
//获取banner
export const reqGetBannerList = ()=>mockrequests.get("/banner")

//获取floor数据
export const reqFloorList = ()=>mockrequests.get("/floor")

export const reqGetSearchInfo = (params)=>requests({
	url:"/list",
	method:"post",
	data:params	})
//获取产品详情	
export const reqGoodsinfo=(skuId)=>requests({
		url:`/item/${skuId}`,
		method:'get',
		});
//将产品添加到购物车中
export const reqcartList=(skuId,skuNum)=>requests({
		url:`/cart/addToCart/${skuId}/${skuNum}`,
		method:'post',
		});
//获取购物车数据
export const reqShopcart = ()=>requests({
		url:'/cart/cartList',
		method:'get',
		});	
//删除产品数据
export const reqdeleteCart = (skuId)=>requests({
		url:`/cart/deleteCart/${skuId}`,
		method:'delete',
		});	
export const reqChecked = (skuId,isChecked)=>requests({
		url:`/cart/checkCart/${skuId}/${isChecked}`,
		method:'get',
		});	
//获取验证码
export const reqGetCode = (phone)=>requests({
		url:`/user/passport/sendCode/${phone}`,
		method:'get',
		});	
//用户注册
export const reqUserRegister = (data)=>requests({
		url:'/user/passport/register',
		data,
		method:'post',
		});	
//登录
export const reqUserLogin = (data)=>requests({
		url:'/user/passport/login',
		data,
		method:'post',
		});					
//token获取用户信息
export const tokenLogin = ()=>requests({
		url:'/user/passport/auth/getUserInfo',
		method:'get',
		});	
//退出登录
export const reqLogout = ()=>requests({
		url:'/user/passport/logout',
		method:'get',
		});	
//获取用户地址信息
export const reqAddress = ()=>requests({
		url:'/user/userAddress/auth/findUserAddressList',
		method:'get',
		});	
//订单交易页信息
export const reqOrderInfo = ()=>requests({
		url:'/order/auth/trade',
		method:'get',
		});			
//提交订单的接口
export const reqsubmitOrder = (tradeNo,data)=>requests({
		url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
		data,
		method:'post',
		});		
//获取订单支付信息	
export const reqPayInfo = (orderId)=>requests({
		url:`/payment/weixin/createNative/${orderId}`,
		method:'get',
		});		
//查询支付订单状态
export const reqPayStatus = (orderId)=>requests({
		url:`/payment/weixin/queryPayStatus/${orderId}`,
		method:'get',
		});	
				
//获取我的订单列表		
export const reqauth = (page,limit)=>requests({
		url:`/order/auth/${page}/${limit}`,
		method:'get',
		});			
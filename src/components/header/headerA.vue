<template>
	<header class="header">
	    <!-- 头部的第一行 -->
	    <div class="top">
	        <div class="container">
	            <div class="loginList">
	                <p>尚品汇欢迎您！</p>
	                <p v-if="!userName">
	                    <span>请</span>
	                    <router-link class="login" to="/login">登录</router-link>
						<!--<router-link  class="register">免费注册</router-link>-->
	                    <router-link  class="register" to="/register">免费注册</router-link>
	                </p>
					<p v-else>
						<a>{{userName}}</a>
						<a class="register" @click="logout">退出登录</a>
					</p>
	            </div>
	            <div class="typeList">
	                <!-- <a href="###">我的订单</a> -->
	                <!-- <a href="###">我的购物车</a> -->
					<RouterLink to="/center">我的订单</RouterLink>
					<RouterLink to="/shopcart">我的购物车</RouterLink>
	                <a href="###">我的尚品汇</a>
	                <a href="###">尚品汇会员</a>
	                <a href="###">企业采购</a>
	                <a href="###">关注尚品汇</a>
	                <a href="###">合作招商</a>
	                <a href="###">商家后台</a>
	            </div>
	        </div>
	    </div>
	    <!--头部第二行 搜索区域-->
	    <div class="bottom">
	        <h1 class="logoArea">
	           <!-- <a class="logo" title="尚品汇" target="_blank">
	                <img src="../../assets/logo.png" alt="" >
	            </a>-->
				<RouterLink class="logo" title="尚品汇" target="_blank" to="/home"><img src="../../assets/logo.png" alt="" ></RouterLink>
	        </h1>
	        <div class="searchArea">
	            <form action="###" class="searchForm">
	                <input type="text" 
					id="autocomplete" 
					class="input-error input-xxlarge" 
					v-model="keyword"/>
	                <button class="sui-btn btn-xlarge btn-danger" type="button" @click="gosearch">搜索</button>
	            </form>
	        </div>
	    </div>
	</header>
</template>

<script>
	export default{
		name:'headera',
		data(){
			return {
				keyword:"",
				}
		},
		methods:{
			//跳转到搜索页面
			gosearch(){
				//字符串形式
				//this.$router.push('/search/'+this.keyword+"?k="+this.keyword.toUpperCase())
				//模板字符串
				//this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
				//对象形式
				//this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})
				if(this.$route.query){
					let loction = {name:"search",params:{keyword:this.keyword||undefined}};
					loction.query= this.$route.query;
					this.$router.push(loction);
				}
				/* this.$router.push(
				{
					name:"search",
					params:{keyword:this.keyword||undefined},
					query:{k:this.keyword.toUpperCase()},
				}) */
			},
			//退出登录
			logout(){
				try{
					this.$store.dispatch('userLogout')
					this.$router.push('/home')
				}catch(e){
					//TODO handle the exception
				}
				
			}
		},
		mounted() {
			this.$bus.$on("clear",()=>{
				this.keyword=''
			})
		},
		computed:{
			userName(){
				return this.$store.state.user.userInfo.name
			}
		}
	}
</script>

<style >
	*{
		margin: 0;
		padding: 0;
	}
	 .header > .top {
	  background-color: #eaeaea;
	  height: 30px;
	  line-height: 30px;
	}
	 .header > .top .container {
	  width: 1200px;
	  margin: 0 auto;
	  overflow: hidden;
	  position:relative;
	}
	.header > .top .container .loginList {
	  float: left;
	}
	.header > .top .container .loginList p {
	  float: left;
	  margin-right: 10px;
		font-size: 1px;
	}
	.header > .top .container .loginList p .login{
		color: #B3AEAE;
		text-decoration: none;
	}
	.header > .top .container .loginList p .register {
	  border-left: 1px solid #b3aeae;
	  padding: 0 5px;
	  margin-left: 5px;
	  color: #B3AEAE;
	  text-decoration: none;
	}
	.header > .top .container .typeList {
	  margin-left: 210px;
	}
	.header > .top .container .typeList a {
	  padding: 0 10px;
	  text-decoration: none;
	  color: #B3AEAE;
	}
	.header > .top .container .typeList a + a {
	  border-left: 1px solid #b3aeae;
	}
	.header > .bottom {
	  width: 1200px;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.header > .bottom .logoArea {
	  float: left;
	}
	.header > .bottom .logoArea .logo img {
	  width: 100px;
	  margin: 25px 45px;
	}
	.header > .bottom .searchArea {
	  float: right;
	  margin-top: 35px;
	}
	.header > .bottom .searchArea .searchForm {
	  overflow: hidden;
	}
	.header > .bottom .searchArea .searchForm input {
	  box-sizing: border-box;
	  width: 490px;
	  height: 32px;
	  padding: 0px 4px;
	  border: 2px solid #ea4a36;
	  float: left;
	}
	 .header > .bottom .searchArea .searchForm input:focus {
	  outline: none;
	}
	.header > .bottom .searchArea .searchForm button {
	  height: 32px;
	  width: 68px;
	  background-color: #ea4a36;
	  border: none;
	  color: #fff;
	  float: left;
	  cursor: pointer;
	}
	.outer .header > .bottom .searchArea .searchForm button:focus {
	  outline: none;
	}
	
</style>

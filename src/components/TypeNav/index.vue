<template>
		<!-- 商品分类导航 -->
				<div class="type-nav">
					<div class="container">
						<h2 class="all" @mouseenter="entershow" @mouseleave="leaveshow" >全部商品分类</h2>
						<nav class="nav">
							<a href="###">服装城</a>
							<a href="###">美妆馆</a>
							<a href="###">尚品汇超市</a>
							<a href="###">全球购</a>
							<a href="###">闪购</a>
							<a href="###">团购</a>
							<a href="###">有趣</a>
							<a href="###">秒杀</a>
						</nav>
						<div class="sort" v-show="show" >
							<div class="all-sort-list2" @click="gosearch" @mouseenter="entershow" @mouseleave="leaveshow">
								<div class="item bo" v-for="(c1,index) in categoryList" :key="c1.categoryId">
									<h3>
										<a :data-categoryName="c1.categoryName" 
										:data-category1Id="c1.categoryId"
										>{{c1.categoryName}}</a> 
										<!-- <RouterLink to="/search">{{c1.categoryName}}</RouterLink> -->
									</h3>
									<div class="item-list clearfix">
										<div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
											<dl class="fore">
												<dt>
													<a :data-categoryName="c2.categoryName" 
													:data-category2Id="c2.categoryId"
													>{{c2.categoryName}}</a>
													<!-- <RouterLink to="/search">{{c2.categoryName}}</RouterLink> -->
												</dt>
												<dd>
													<em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
														<a :data-categoryName="c3.categoryName"
														:data-category3Id="c3.categoryId"
														>{{c3.categoryName}}</a>
														<!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
													</em>
													</dd>
											</dl>
										</div>
									</div>
								</div>
								</div>
						</div>
					</div>
			</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	
	export default{
		name:"TypeNav",
		data(){
			return {
				show:true,
				}
		},
		mounted() {
			this.$store.dispatch('categoryList')
			if(this.$route.path!='/home')
			{
				this.show = false
			}
		},
		computed:{
			...mapState({
				categoryList:state=>state.home.categoryList
			})
			
		},
		methods:{
			gosearch(event){
				let element = event.target;
				console.log(element)
				let {categoryname,
				category1id,
				category2id,
				category3id} = element.dataset
				if(categoryname){
					let location = {name:"search"}
					let query={categoryname:categoryname}
					if(category1id){
						query.category1Id = category1id
					}else if(category2id){
						query.category2Id = category2id
					}else {
						query.category3Id = category3id
					}
					location.query = query;
					this.$router.push(location)
				}
			},
			entershow(){
				this.show = true
			},
			leaveshow(){
				if(this.$route.path!='/home')
				{
					this.show = false
					}
			}
		}	
	}
</script>

<style>
	 {
	  border-bottom: 2px solid #e1251b;
	}
	 .container {
	  width: 1200px;
	  margin: 0 auto;
	  display: flex;
	  position: relative;
	}
	 .container .all {
	  width: 210px;
	  height: 45px;
	  background-color: #e1251b;
	  line-height: 45px;
	  text-align: center;
	  color: #fff;
	  font-size: 14px;
	  font-weight: bold;
	}
	 .container .nav a {
	  height: 45px;
	  margin: 0 22px;
	  line-height: 45px;
	  font-size: 16px;
	  color: #333;
	  text-decoration:none;
	}
	 .container .sort {
	  left: 0;
	  top: 45px;
	  width: 210px;
	  height: 461px;
	  position: absolute;
	  background: #fafafa;
	  z-index: 999;
	 }
	  .container .sort .item h3:hover{
		 background: #afd1dd;
		 opacity: 0.5;	 
	 }
	 .container .sort .all-sort-list2 .item h3 {
	  line-height: 27.5px;
	  font-size: 14px;
	  font-weight: 400;
	  overflow: hidden;
	  padding: 0 20px;
	  margin: 0;
	  }
	 .container .sort .all-sort-list2 .item h3 a {
	  color: #333;
	  text-decoration:none;
	}
	 .container .sort .all-sort-list2 .item .item-list {
	  display: none;
	  position: absolute;
	  width: 734px;
	  min-height: 460px;
	  background: #f7f7f7;
	  left: 210px;
	  border: 1px solid #ddd;
	  top: 0;
	  z-index: 9999 !important;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem {
	  float: left;
	  width: 650px;
	  padding: 0 4px 0 8px;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl {
	  border-top: 1px solid #eee;
	  padding: 6px 0;
	  overflow: hidden;
	  zoom: 1;
	  text-decoration:none;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
	  border-top: 0;
	  text-decoration:none;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
	  float: left;
	  width: 54px;
	  line-height: 22px;
	  text-align: right;
	  padding: 3px 6px 0 0;
	  font-weight: 700;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dt a{
		text-decoration:none;
		color: #333333;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
	  float: left;
	  width: 415px;
	  font-size: 14px;
	  padding: 3px 0 0;
	  overflow: hidden;
	}
	
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
	  float: left;
	  height: 14px;
	  line-height: 14px;
	  padding: 0 8px;
	  margin-top: 5px;
	  border-left: 1px solid #ccc;
	  text-decoration:none;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dd em a{
		text-decoration:none;
		color: #333333;
	}
	 .container .sort .all-sort-list2 .item .item-list .subitem dl dd em a:hover{
		 color: #a0cbda;
	 }
	 .container .sort .all-sort-list2 .item:hover .item-list {
	  display: block;
	}
	
</style>
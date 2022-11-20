<template>
	<div class="cart">
		<h4>全部商品</h4>
		<div class="cart-main">
			<div class="cart-th">
				<div class="cart-th1">全部</div>
				<div class="cart-th2">商品</div>
				<div class="cart-th3">单价（元）</div>
				<div class="cart-th4">数量</div>
				<div class="cart-th5">小计（元）</div>
				<div class="cart-th6">操作</div>
			</div>
			<div class="cart-body">
				<ul class="cart-list" v-for="(cart,index) in cartInfoList" :key="cart.id">
					<li class="cart-list-con1">
						<br>
						<input type="checkbox" 
						name="chk_list" 
						:checked="cart.isChecked==1"
						@change="updateChecked(cart,$event)"
						>
					</li>
					<li class="cart-list-con2">
						
						<img :src="cart.imgUrl">
						<div class="item-msg">{{cart.skuName}}</div>
					</li>
					<li class="cart-list-con4">
						<br>
						<span class="price">{{cart.skuPrice}}.00</span>
					</li>
					<li class="cart-list-con5">
						<br>
						<a href="javascript:void(0)" class="mins" @click="handler('mins',-1,cart)">-</a>
						<input autocomplete="off" type="text" minnum="1" class="itxt" :value="cart.skuNum"
							@change="handler('change',$event.target.value*1,cart)">
						<a href="javascript:void(0)" class="plus" @click="handler('plus',1,cart)">+</a>
					</li>
					<li class="cart-list-con6">
						<br>
						<span class="sum">{{cart.skuPrice*cart.skuNum}}</span>
					</li>
					<li class="cart-list-con7">
						<br>
						<a class="sindelet" @click="deletecartById(cart)">删除</a>
						
					</li>
				</ul>

			</div>
		</div>
		<div class="cart-tool">
			<div class="select-all">
				<input class="chooseAll" type="checkbox" :checked="isAllCheck" @change="updateAllChecked">
				<span>全选</span>
			</div>
			<div class="option">
				<a @click="deleteAllChecked">删除选中的商品</a>
			</div>
			<div class="money-box">
				<div class="chosed">已选择
					<span>0</span>件商品
				</div>
				<div class="sumprice">
					<em>总价（不含运费） ：</em>
					<i class="summoney">{{toPrice}}</i>
				</div>
				<div class="sumbtn">
					<!-- <a class="sum-btn" @click="$router.push('/trade')">结算</a> -->
					<RouterLink class="sum-btn" to="/trade">结算</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import throttle from "lodash/throttle"
	export default {
		name: 'ShopCart',
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				this.$store.dispatch('getcartList')
			},
			//修改某一个产品的个数
			//区分＋，-，change
			handler: throttle(async function(type, disNum, cart) {
				//this.currentIndex = index
				switch (type) {
					case "add":
						disNum = 1
						break;
					case "mins":
						disNum = cart.skuNum > 1 ? -1 : 0
						break;
					case "change":
						if (isNaN(disNum) || disNum < 1) {
							disNum = 0
						} else {
							disNum = parseInt(disNum) - cart.skuNum
						}
						break;
				}
				try {
					await this.$store.dispatch('addshopcartlist', {
						skuId: cart.skuId,
						skuNum: disNum
					})
					this.getData()
				} catch (e) {
					alert(error.message)
				}
			}, 500),
			//删除某一个产品
			async deletecartById(cart) {
				try {
					await this.$store.dispatch('deleteCartList', cart.skuId)
					this.getData()
				} catch (error) {
					alert(error.message)
				}
			},
			async updateChecked(cart,$event){
				try{
					let isChecked = event.target.checked?"1":"0"
					await this.$store.dispatch('updateChecked',{skuId:cart.skuId,isChecked})
					this.getData()
				 } catch(e){
					alert(e.message)
				} 
			},
			//点击删除全部选中
			async deleteAllChecked(){
				try{
					await this.$store.dispatch("deleteAllChecked")
					this.getData()
				}catch(error){
					alert(error.message)
				}
			},
			//修改全选状态
			async updateAllChecked(event){
				try{
					let isChecked=event.target.checked?"1":"0"
					await this.$store.dispatch("updateAllChecked",isChecked)
					this.getData()
				}catch(error){
					alert(error.message)
				}
			}
		},
		computed: {
			...mapGetters(['cartList']),
			cartInfoList() {
				return this.cartList.cartInfoList || []
			},
			toPrice(event) {
				let sum = 0
				
					this.cartInfoList.forEach(item => {
					sum += item.skuPrice * item.skuNum
				})
				return sum
				
			},
			isAllCheck() {
				return this.cartInfoList.every(item => item.isChecked == 1)
			}
		},

	}
</script>

<style lang="less" scoped>
	.cart {
		width: 1200px;
		margin: 0 auto;

		h4 {
			margin: 9px 0;
			font-size: 14px;
			line-height: 21px;
		}

		.cart-main {
			.cart-th {
				background: #f5f5f5;
				border: 1px solid #ddd;
				padding: 10px;
				overflow: hidden;

				&>div {
					float: left;
				}

				.cart-th1 {
					width: 25%;

					input {
						vertical-align: middle;
					}

					span {
						vertical-align: middle;
					}
				}

				.cart-th2 {
					width: 25%;
				}

				.cart-th3,
				.cart-th4,
				.cart-th5,
				.cart-th6 {
					width: 12.5%;

				}
			}

			.cart-body {
				margin: 15px 0;
				border: 1px solid #ddd;

				.cart-list {
					padding: 10px;
					border-bottom: 1px solid #ddd;
					overflow: hidden;

					&>li {
						float: left;
					}

					.cart-list-con1 {
						width: 15%;

					}

					.cart-list-con2 {
						width: 35%;
						list-style-type: none;

						img {
							width: 82px;
							height: 82px;
							float: left;
						}

						.item-msg {
							float: left;
							width: 150px;
							margin: 0 10px;
							line-height: 18px;
						}
					}



					.cart-list-con4 {
						width: 10%;
						list-style-type: none;

					}

					.cart-list-con5 {
						width: 17%;
						list-style-type: none;

						.mins {
							border: 1px solid #ddd;
							border-right: 0;
							float: left;
							color: #666;
							width: 6px;
							text-align: center;
							padding: 8px;
						}

						input {
							border: 1px solid #ddd;
							width: 40px;
							height: 33px;
							float: left;
							text-align: center;
							font-size: 14px;
						}

						.plus {
							border: 1px solid #ddd;
							border-left: 0;
							float: left;
							color: #666;
							width: 6px;
							text-align: center;
							padding: 8px;
						}
					}

					.cart-list-con6 {
						width: 10%;
						list-style-type: none;

						.sum {
							font-size: 16px;
						}
					}

					.cart-list-con7 {
						width: 13%;
						list-style-type: none;


						a {
							color: #666;
							text-decoration: none;
						}
					}
				}
			}
		}

		.cart-tool {
			overflow: hidden;
			border: 1px solid #ddd;

			.select-all {
				padding: 10px;
				overflow: hidden;
				float: left;

				span {
					vertical-align: middle;
				}

				input {
					vertical-align: middle;
				}
			}

			.option {
				padding: 10px;
				overflow: hidden;
				float: left;

				a {
					float: left;
					padding: 0 10px;
					color: #666;
				}
			}

			.money-box {
				float: right;

				.chosed {
					line-height: 26px;
					float: left;
					padding: 0 10px;
				}

				.sumprice {
					width: 200px;
					line-height: 22px;
					float: left;
					padding: 0 10px;

					.summoney {
						color: #c81623;
						font-size: 16px;
					}
				}

				.sumbtn {
					float: right;

					a {
						display: block;
						position: relative;
						width: 96px;
						height: 52px;
						line-height: 52px;
						color: #fff;
						text-align: center;
						font-size: 18px;
						font-family: "Microsoft YaHei";
						background: #e1251b;
						overflow: hidden;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="floor">
		<div class="py-container">
			<div class="title clearfix">
				<h3 class="fl">{{list.name}}</h3>
				<div class="fr">
					<ul class="nav-tabs clearfix" >
						<li v-for="(nav,index) in list.navList":key="index" :class="index==0?'active':''">
							<a href="#tab1" data-toggle="tab" >{{nav.text}}</a>
						</li>
						
						
					</ul>
				</div>
			</div>
			<div class="tab-content">
				<div class="tab-pane">
					<div class="floor-1">
						<div class="blockgary">
							<ul class="jd-list">
								<li>节能补贴</li>
								<li>4K电视</li>
								<li>空气净化器</li>
								<li>IH电饭煲</li>
								<li>滚筒洗衣机</li>
								<li>电热水器</li>
							</ul>
							<img :src="list.imgUrl" />
						</div>
						<div class="floorBanner">
							<div class="swiper-container" id="floor2Swiper" ref="cur">
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(carousel,index) in list.carouselList"
										:key="carousel.id">
										<img :src="carousel.imgUrl">
									</div>
									<!--  <div class="swiper-slide">
	                                    <img src="../../assets/home/floor-1-b02.png">
	                                </div>
	                                <div class="swiper-slide">
	                                    <img src="../../assets/home/floor-1-b03.png">
	                                </div>-->
								</div>
								<!-- 如果需要分页器 -->
								<div class="swiper-pagination"></div>

								<!-- 如果需要导航按钮 -->
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
						</div>
						<div class="split">
							<span class="floor-x-line"></span>
							<div class="floor-conver-pit">
								<img src="../../assets/home/floor-1-2.png" />
							</div>
							<div class="floor-conver-pit">
								<img src="../../assets/home/floor-1-3.png" />
							</div>
						</div>
						<div class="split center">
							<img src="../../assets/home/floor-1-4.png" />
						</div>
						<div class="split">
							<span class="floor-x-line"></span>
							<div class="floor-conver">
								<img src="../../assets/home/floor-1-5.png" />
							</div>
							<div class="floor-conver">
								<img src="../../assets/home/floor-1-6.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	export default {
		name: "",
		props: ['list'],
		mounted() {
			var mySwiper = new Swiper(this.$refs.cur, {
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				/* navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    }, */
			})
		}
	}
	/*<div class="split center">
	    <img src="../../assets/home/floor-1-4.png" />
	</div>
	.floor .py-container .tab-content .tab-pane .floor-1 .floorBanner {
	  width: 330px;
	  height: 100%;
	  display: flex;
	  float: left;
	}
	.floor .py-container .title .fr .nav-tabs li.active a {
	
	  color: #e1251b;
	}
	*/
</script>

<style>
	.floor {
		margin-top: 15px;
	}

	.floor .py-container {
		width: 1200px;
		margin: 0 auto;
	}

	.floor .py-container .title .fl {
		float: left;
		color: #c81623;
		font-size: 20px;
		line-height: 30px;
		margin: 9px 0;
		font-weight: 700;
	}

	.floor .py-container .title .fr {
		float: right;
	}

	.floor .py-container .title .fr .nav-tabs {
		margin: 10px 0 0;
		list-style-type: none;
		display: inline-block;
	}
	.floor .py-container .title .fr ul:first-child{
		color: #de0e00;
	}
	.floor .py-container .title .fr .nav-tabs li {
		float: left;
		line-height: 18px;
	}

	.floor .py-container .title .fr .nav-tabs li a {
		padding-top: 1px;
		font-weight: 400;
		color: #9aa2a7;
		text-decoration: none;
		background-color: #ffffff;
	}

	.floor .py-container .title .fr .nav-tabs li a::after {
		content: "|";
		padding: 0 10px;
	}

	.floor .py-container .title .fr .nav-tabs li:nth-child(7) a::after {
		content: "";
	}

	
	.floor .py-container .title .fr .nav-tabs li.active a{
		color: #de0e00;
	} 
	.floor .py-container .tab-content .tab-pane {
		margin-top: 30px;
		border-top: 2px solid #c81623;

	}

	.floor .py-container .tab-content .tab-pane .floor-1 {
		padding-top: 50px;
		margin-left: 10px;
		height: 360px;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .blockgary {
		width: 210px;
		height: 100%;
		background: #f7f7f7;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list {
		padding: 15px 0;
		overflow: hidden;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list li {
		list-style-type: none;
		float: left;
		width: 40%;
		margin: 0 10px;
		border-bottom: 1px solid #e4e4e4;
		text-align: center;
		line-height: 26px;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .blockgary img {
		width: 100%;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .floorBanner {
		padding-left: 210px;
		margin-top: -360px;
		width: 330px;
		height: 100%;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split {
		margin-top: -360px;
		width: 220px;
		height: 100%;
		position: relative;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-x-line {
		padding-left: 760px;
		position: absolute;
		width: 220px;
		height: 1px;
		top: 180px;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit {
		padding-left: 540px;
		width: 100%;
		height: 50%;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img {
		width: 100%;
		height: 100%;
		transition: all 400ms;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img:hover {
		opacity: 0.8;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver {
		padding-left: 980px;
		width: 100%;
		height: 50%;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver img {
		width: 100%;
		height: 100%;
		transition: all 400ms;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver img:hover {
		opacity: 0.8;
	}

	.floor .py-container .tab-content .tab-pane .floor-1 .center {
		padding-left: 760px;
		border: 1px solid #e4e4e4;
	}
</style>

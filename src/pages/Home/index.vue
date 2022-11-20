<template>
	<div>
	<TypeNav></TypeNav>
	<listContainer></listContainer>
	<Recommend></Recommend>
	<Rank></Rank>
	<Belike></Belike>
	<Floor v-for="(floor,index) in floorlist" :key="floor.id" :list="floor"></Floor>
	
	<Brand></Brand>
	<!--<button @click="add">点击我加1</button>
	<span>仓库的数据{{count}}</span>
	<button>点击我减1</button>-->
	</div>
</template>

<script>
	import listContainer from '/src/pages/Home/listContainer.vue'
	import Recommend from '/src/pages/Home/Recommend.vue'
	import Rank from '/src/pages/Home/Rank.vue'
	import Belike from '/src/pages/Home/Belike.vue'
	import Floor from '/src/pages/Home/Floor.vue'
	import Brand from '/src/pages/Home/Brand.vue'
	import {mapState} from 'vuex'
	
	export default{
		name:'home',
		components:{
			listContainer,
			Recommend,
			Rank,
			Belike,
			Floor,
			Brand
		},
	
		mounted() {
			//获取floor组件的数据
			this.$store.dispatch('getFloorList');
			//获取用户信息展示在首页
			this.$store.dispatch('getUserInfo')
		},
		computed:{
			...mapState({
				floorlist:state=>state.home.floorlist
			})
		},
	}
</script>

<style>
</style>

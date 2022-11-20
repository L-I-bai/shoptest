<template>
  <div>
    <headerA></headerA>
	<!--书写路由组件出口-->
	
	<router-view></router-view>
	
	<footerA v-show="$route.meta.show"></footerA>
  </div>
</template>

<script>
import headerA from './components/header/headerA.vue'
import footerA from './components/footer/footerA.vue'
import store from './store/index.js'

export default {
  name: 'App',
  components: {
    headerA,
	footerA,
	store
  },
}
</script>

<style >

</style>
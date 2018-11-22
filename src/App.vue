<template>
  <div id="app">
		<Aheader></Aheader>
		<router-view></router-view>
		<Tabbar></Tabbar>
  </div>
</template>

<script>
	import Aheader from './components/common/Aheader'
	import Home from './components/page/Home/Home'
	import Tabbar from './components/common/tabbar'
export default {
  name: 'App',
	components:{
		Home,
		Tabbar,
		Aheader
	}
}
</script>

<style lang = 'scss'>
	#app{
		font-size:3.2rem;
		overflow: hidden;
	}
</style>

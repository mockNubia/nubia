<template>
	<div class="product main">
		<ProductMain></ProductMain>
		<ProductTabbar></ProductTabbar>
	
	</div>
	
</template>
<script>
	import ProductTabbar from './productTabbar'
	import ProductMain from './productMain'
	export default {
		name : 'Product',
		data(){
			return{
				
			}
		},
		components:{
			ProductTabbar,
			ProductMain
		}
	}
</script>
<style>
	.main{
		margin-bottom: 6.24rem;
	}
</style>
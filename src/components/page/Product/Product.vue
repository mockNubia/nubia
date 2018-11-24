<template>
	<div class="product main">
		<ProductMain 
			:buypro = 'buypro'
			:addInCar = 'addInCar'
			@buy = 'buied' 
			:addCar = 'addInCart'
		></ProductMain>
		<ProductTabbar 
			@buy = 'buied' 
			:addCar = 'addInCart'
		></ProductTabbar>
	
	</div>
	
</template>
<script>
	import ProductTabbar from './productTabbar'
	import ProductMain from './productMain'
	export default {
		name : 'Product',
		data(){
			return{
				buypro:false,
				addInCar:false
			}
		},
		components:{
			ProductTabbar,
			ProductMain
		},
		methods:{
			buied(){
				this.buypro = !this.buypro;
				// console.log(this.buypro);
			},
			addInCart(){
				this.addInCar = !this.addInCar;
				// console.log(this.addInCar);
			}
		}
	}
</script>
<style>
	.main{
		margin-bottom: 6.24rem;
	}
</style>
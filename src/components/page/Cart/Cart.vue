<template>
	<div class="cart">
		<div class="unCart">
			<CartHeader></CartHeader>
			<BuyCart></BuyCart>
		</div>
	</div>
</template>
<script>
	import CartHeader from './CartHeader'
	import BuyCart from './BuyCart'

	export default {
		name:'Cart',
		data(){
			return{
				num:[],
				testStr:''
			}
		},
		components:{
			CartHeader,BuyCart
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
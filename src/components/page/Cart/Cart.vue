<template>
	<div class="cart">
		<div class="unCart" v-if = "!ShowCart">
			<CartHeader></CartHeader>
			<BuyCart></BuyCart>
		</div>
		<div class="proCart main">
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
				testStr:'',
				ShowCart:false
			}
		},
		components:{
			CartHeader,BuyCart
		},
		methods:{
			isShowCart(){
			}
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
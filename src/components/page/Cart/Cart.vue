<template>
	<div class="cart">
		<div class="unCart" v-if = "!ShowCart">
			<CartHeader></CartHeader>
			<unBuyCart></unBuyCart>
		</div>
		<div class="proCart main">
			<BuyCart :nums = 'num'></BuyCart>
		</div>
		<CarTabbar
			:showTabbar = 'showTabbar'
		></CarTabbar>
	</div>
</template>
<script>
	import CartHeader from './CartHeader'
	import unBuyCart from './unBuyCart'
	import BuyCart from './BuyCart'
	import CarTabbar from './CarTabbar'

	export default {
		name:'Cart',
		data(){
			return{
				num:[],
				testStr:'',
				ShowCart:false,
				showTabbar:false
			}
		},
		components:{
			CartHeader,unBuyCart,BuyCart,CarTabbar
		},
		methods:{
			getNum(){
				this.num = JSON.parse(localStorage.proesc ? localStorage.proesc:'[]');
			}
		},
		watch:{
			num:function(newVal,oldVal){
				if(newVal.length){
					this.ShowCart = true;
					this.showTabbar = true
				}else{
					this.ShowCart = false;
					this.showTabbar = false
				};
			}
		},
		created(){
			this.getNum();
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
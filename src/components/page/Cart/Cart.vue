<template>
	<div class="cart">
		<div class="unCart">
			<CartHeader></CartHeader>
			<BuyCart></BuyCart>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
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
		},
		methods:{
			...mapActions(['aheader']),
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'cate':
					case 'accessory':
					case 'phone':
					this.aheader({boolen:true});
					break;
					default :
					this.aheader({boolen:false});
				}
			}
		},
		watch:{
		},
		created(){
			this.isShowHeader()
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
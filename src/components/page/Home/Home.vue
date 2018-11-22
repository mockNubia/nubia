<template>
	<div class="home">
		<IndexHeader></IndexHeader>
		<div class="main">
			<Banner></Banner>
			<ShowBig></ShowBig>
			<ShowProduct
			v-for = '(product,index) in products'
			:key = 'index'
			:product = 'product'></ShowProduct>
		</div>
	</div>
</template>
<script>
	import IndexHeader from './IndexHeader'
	import Banner from './Banner'
	import ShowBig from './ShowBig'
	import ShowProduct from './ShowProduct'
	import { mapActions } from 'Vuex'
	export default {
		name:'home',
		data(){
			return{
				products:[
					{id : 1,title : '热销机型',linkTitle : '商品',path : 'cate'},
					{id : 2,title : '精选配件',linkTitle : '配件',path : 'accessory'}
				]
			}
		},
		components:{
			IndexHeader,Banner,ShowBig,ShowProduct
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
		created(){
			this.isShowHeader()
		}
	}
</script>
<style lang = 'scss' scoped>
	.home{
		width:100%;
		font-size:2.8rem;
		background: #cdf;
		
	}
</style>
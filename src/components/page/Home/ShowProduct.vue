<template>
	<div class="showProduct"
	>
		<div class="showProductTitle">{{product.title}}</div>
		<div class="showProductBanner">
			<img v-lazy="'../../../../static/imgs/'+showBanners.image" alt="">
		</div>
		<ShowProductItem 
		:changeId = 'searchId'
		:type = "product.id" 
		:showProduct = "product.id === 1 ? showProduct['506']:showProduct['505']"
		></ShowProductItem>
		<router-link 
			:to = '{name:product.path}' 
			tag = 'div' 
			class="showProductLink">
			查看更多{{product.linkTitle}}
			<i class = 'fa fa-angle-right'></i>
		</router-link>
	</div>
</template>
<script>
	import ShowProductItem from '../../common/showProductItem.vue'
	export default {
		name:'ShowProduct',
		props:['product'],
		data(){
			return{
				showProduct:[],
				showBanners:{},
				searchId:100
			}
		},
		components:{
			ShowProductItem
		},
		methods:{
		},
		created(){
			this.$Axios.get('../../../../static/json/show_product.json')
			.then((res)=>{
				this.showProduct = res.data.data;
				this.product.id===1 ? this.showBanners = this.showProduct['507']['0']:this.showBanners = this.showProduct['508']['0']
				
			})
			.catch((err)=>{
				console.log(err);
			})
		}
	}
</script>
<style lang = 'scss' scoped>
	.showProduct{
		.showProductTitle{
			line-height:4.4rem;
			background: #fff;
			padding:0 2rem;
			font-size:4rem;
		}
		.showProductBanner{
			font-size:0;
			img{
				width:100%;
			}
		}
		.showProductLink{
			margin-top: 2px;
			line-height:5.4rem;
			text-align: center;
			background: #f4f3ef;
			color:#f35b4e;
		}
	}
</style>
<template>
	<div class="showProductList">
		<router-link 
			tag = 'div'
			class="showProductItem"
			v-for = "(product,index) in showProducts"
			:key = product.sid
			:style = "{marginRight : (index+1)%2 == 0 ? '0px' : '2px',background : $route.path != '/' ? '#fff' : '#f4f3ef'}"
			:to = "{name:'product',
			query:{id:product.sid,title:product.title,price:product.price,imgUrl:product.image,color_name:product.color_name}}"
		>
			<div class="product_img">
				<img :src="`../../../static/imgs/${product.image}`" alt="">
			</div>
			<div class = 'product_sec' v-if = 'type ===1 '>
				<p class = 'product_title'>{{product.title}}{{product.color_name}}</p>
				<p class = 'sub_title'>{{product.sub_title}}</p>
				<p class = 'prices'>
					<span class = 'price'>￥{{product.price}}元</span>
					<span class="origin_price">|
						<del>{{product.block_products.original_price}}</del>
					</span>
				</p>
			</div>
			<div class = 'product_sec' v-else>
				<p class = 'product_title'>{{product.title}}</p>
				<p class = 'prices'>
					<span class = 'price'>￥{{product.price}}元</span>
				</p>
			</div>
		</router-link>
	</div>
	
</template>
<script>
	export default {
		name:'ShowProductItem',
		props:['type','showProduct','changeId','newSort','priceSort'],
		data(){
			return{
			}
		},
		methods:{
		},
		computed : {
			showProducts : function(){
				if(!this.$route.query.id){
					return this.showProduct;
				}
				if(this.changeId == 100){
					return this.showProduct;
				}
				return this.showProduct.filter((item)=>{
						return item.id == this.changeId;
					})
			}
		},
		watch:{
			priceSort:function(newVal,oldVal){
				if(newVal){
					this.showProduct.sort((a,b)=>{
						return a.price-b.price
					})
				}else{
					this.showProduct.sort((a,b)=>{
						return b.price-a.price
					})
				}
			},
			newSort:function(newVal,oldVal){
				if(newVal){
					this.showProduct.sort((a,b)=>{
						return b.sid-a.sid
					})
				}else{
					return false
				}
			}
		}
	}
</script>
<style lang = 'scss' scoped>
	.showProductList{
		display:flex;
		flex-wrap:wrap;
		text-align: center;
		.showProductItem{
			width: 49.7%;
			padding:2rem 0;
			margin-top:2px;
			.product_img{
				padding:0 2rem;
				img{
					width:100%;
				}
			}
			.product_sec{
				.sub_title{
					color:#FF4D4D;
					font-size:2.6rem;
				}
				.price{
					color:rgb(255, 103, 0);
					font-weight: bold;
				}
				.origin_price{
					font-weight: bold;
					color:#777;
				}
			}
		}
		
	}
</style>
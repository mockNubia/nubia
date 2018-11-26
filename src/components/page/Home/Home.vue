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
			setData(){
				if(localStorage.increase === undefined){
					return false;
				}else{
					var increase = [
						{title:'+80元得 努比亚圈铁耳机',id:750,incshow:false},
						{title:'+69元得 努比亚蓝牙耳机',id:890,incshow:false},
						{title:'+29元得 努比亚炫美自拍杆',id:785,incshow:false},
						{title:'+89元得 便携移动电源',id:972,incshow:false}
					];
					localStorage.increase = JSON.stringify(increase);
				}
			}
		},
		created(){
			this.setData();
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
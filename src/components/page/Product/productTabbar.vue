<template>
	<div class="productTabbar">
		<i class = "fa fa-headphones fa-2x"></i>
		<i class = "fa fa-star-o fa-2x"></i>
		<div class="addCart">加入购物车</div>
		<div class="buy">立即购买</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang = 'scss'>
	.productTabbar{
		display: flex;
		justify-content: space-around;
		align-items: center;
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		height:6.25rem;
		background: #fff;
		border-top:1px solid #ddd;
		.buy,.addCart{
			border-radius: 3rem;
			padding:0.6rem 3rem;
		}
		.addCart{
			border:1px solid #ff4d4d;
			color:#ff4d4d;
		}
		.buy{
			color:#fff;
			background: #ff4d4d;
		}
		.fa{
			color:#6f6f6f;
		}
	}
</style>

<template>
	<div class="noproduct">
		<img src="/static/imgs/emptycart.png" alt="">
		<h3>购物车还是空的</h3>
		<p>现在去选购吧</p>
		<router-link
		to = '/'
		tag = 'button'
		>去逛逛</router-link>
	</div>
</template>
<script>
	export default {
		name:'BuyCart',
	}
</script>
<style lang = "scss" scoped>
	.noproduct{
		padding:5rem 10rem;
		background: rgb(236, 236, 236);
		text-align: center;
		height:85vh;
		img{
			width:100%;
			margin:3rem 0;	
		}
		h3{
			color:#50555b;
		}
		p{
			color: #87888c;
			font-size:2.6rem;
		}
		button{
			font-size:3.4rem;
			font-weight: bolder;
			color: #515459;
			padding:1rem 6rem;
			margin-top: 1rem;
			background-image: linear-gradient(#f3f4f6,#dfe0e2);
			box-shadow: rgba(0,0,0,0.1) 0 0.02941em 0.11765em 0 inset;
			border-top-color: #d3d4d5;
			border-left-color: #dadbdd;
			border-right-color: #dadbdd;
			border-bottom-color: #dadbdd;
		}
	}
</style>
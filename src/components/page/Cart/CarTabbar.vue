<template>
	<div class="carTabbar" v-show = 'showTabbar'>
		<div class="carBtn">去结算</div>
	</div>
</template>

<script>
	export default {
		name:'CarTabbar',
		props:['showTabbar']
	}
</script>

<style lang = 'scss' scoped>
	.carTabbar{
		height: 6.24rem;
		position: fixed;
		z-index: 1000;
		bottom:0;
		right: 0;
		left: 0;
		border-top:1px solid #ccc;
		background: #e5e5e5;
		padding:1rem 3rem;
		.carBtn{
			background: rgb(255, 77, 77);
			color:#fff;
			text-align: center;
			border-radius: 2rem;
			line-height: 4rem;
			font-weight: bold;
		}
	}
</style>

<template>
	<div class="cartHeader border_bottom">
		<div class = 'cartHeaderText'>
			<div class="headerleft">
				<img src="../../../assets/m_c_logo.png" alt="">
			</div>
			<div class="headeright">
				<router-link
				tag = 'div'
				v-for = '(cartItem,index) in cartHeader'
				:key = 'index'
				:to = {name:cartItem.path}
				:class = 'cartItem.icon'
				></router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'CartHeader',
		data(){
			return {
				cartHeader:[
					{icon:'fa fa-user-o',path:'mine'},
					{icon:'fa fa-shopping-cart',path:'cart'}
				]
			}
		}
	}
</script>
<style lang = 'scss' scoped>
	.cartHeader{
		position:fixed;
		z-index:1000;
		top:0;
		left:0;
		right:0;
		height:5.22rem;
		background: #fff;
		.cartHeaderText{
			display:flex;
			justify-content:space-between;
			align-item:center;
			padding:1.3rem 1.6rem;
			.headeright{
				color:#6f6f6f;
				div{
					margin-left: 1rem;
					font-size: 5.2rem;
				}
			}
			.headerleft{
				width:40.6%;
				img{
					width:100%;
				}
			}
		}
	}
</style>
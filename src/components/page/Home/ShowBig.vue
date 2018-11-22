<template>
	<div class="show_big">
		<router-link 
			to = "/product?id=1247"
			class="left">
			<img id = '1247' src="../../../../static/imgs/blockimage/154098916096.jpg" alt="X">
		</router-link>
		<div class="right">
			<ul>
				<router-link
					tag = 'li'
					to = "/product?id=1324"
				>
					<img id = '1324' src="../../../../static/imgs/blockimage/154098947664.jpg" alt="Z18">
				</router-link>
				<router-link
					tag = 'li'
					to = "/product?id=1248"
				>
					<img id = '1248' src="../../../../static/imgs/blockimage/154098899870.jpg" alt="红魔">
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:'ShowBig'
	}
</script>
<style lang = 'scss' scoped>
	.show_big{
		display: flex;
		font-size:0;
	}
	.left{
		padding-top: 2px;
		img{
			width:100%;
		}
	}
	.right{
		background: #fff;
		padding-left:2px;
		li{
			padding-top: 2px;
			list-style: none;
			img{
				width:100%;
			}
		}
	}
</style>
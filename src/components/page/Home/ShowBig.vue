<template>
	<div class="show_big">
		<div class="left">
			<img id = '1247' src="../../../../static/imgs/blockimage/154098916096.jpg" alt="X">
		</div>
		<div class="right">
			<ul>
				<li>
					<img id = '1324' src="../../../../static/imgs/blockimage/154098947664.jpg" alt="Z18">
				</li>
				<li>
					<img id = '1248' src="../../../../static/imgs/blockimage/154098899870.jpg" alt="红魔">
				</li>
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
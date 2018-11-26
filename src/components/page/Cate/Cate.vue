<template>
	<div class="Cate main">
		<div class="cateMain "
		v-for = '(cateTitle,index) in cateTitles'
		:key = 'index'
		>
			<div class="cateHeader border_bottom">{{cateTitle.name}}</div>
			<CateList :type = 'cateTitle.type' :path = "cateTitle.path"></CateList>
			<div class = 'bottom_border'></div>
		</div>
	</div>
</template>
<script>
	import CateList from './CateList'
	export default {
		name:'Cate',
		data(){
			return{
				cateTitles:[
					{name:'红魔竞技游戏手机',type:'hongmo',path:'product'}
					,{name:'手机',type:'catePhone',path:'phone'}
					,{name:'配件',type:'cateAcc',path:'accessory'}
					,{name:'周边产品',type:'cateZb',path:'product'}
					]
			}
		},
		components:{
			CateList
		}
	}
</script>
<style lang = 'scss' scoped>
	.cateHeader{
		line-height:5.22rem;
		padding:0 3rem;
		font-size:4rem;
	}
</style>
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
	import { mapActions } from 'vuex'
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
		},
		methods:{
			...mapActions(['changeTitle','aheader']),
			getRouter(){
				var path = this.$route.path;
				if(path === '/cate'){
					this.changeTitle({title:'商品分类'})
				}
			},
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'cate':
					this.aheader({boolen:true});
					break;
					default :
					this.aheader({boolen:false});
				}
			}
		},
		created(){
			this.getRouter();
			this.isShowHeader()
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
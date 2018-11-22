<template>
	<div class="aheaders"  v-if = "isHeaderShow">
		<div class="aheader border_bottom">
			<i class = "back fa fa-angle-left fa-lg" @click = 'go'></i>
			<span class = 'title'>{{headerTitle}}</span>
			<i class = 'more fa fa-bars fa-lg'
				@click = "navShow = !navShow" 
			></i>
		</div>
		<transition>
			<div class="anav animated" 
				:class = "[navShow ? 'slideInDown' : 'slideOutUp']" 
				v-show = "navShow">
				<router-link class="navitem border_bottom"
				v-for = "(nav,index) in navs"
				:key = "index"
				:to = '{name:nav.path}'
				>
					<div @click = "navShow = !navShow">
						<i :class = "'fa fa-'+nav.icon"></i>
						<p >{{nav.name}}</p>
					</div>
				</router-link>
			</div>
		</transition>
	</div>
	
</template>
<script>
	import { mapState } from 'Vuex'
	export default {
		name:'Aheader',
		data(){
			return{
				navs:[
						{name:'首页',path:'home',icon:'home'},
						{name:'个人中心',path:'mine',icon:'user-o'},
						{name:'购物车',path:'cart',icon:'shopping-cart'}
				],
				navShow:false
			}
		},
		computed:{
			...mapState({
				headerTitle:(state)=>{
					return state.headerTitle;
				},
				isHeaderShow:(state)=>{
					return state.aheader;
				}
			})
		},
		methods:{
			go(){
				window.history.go(-1);
			}
		}
	}
</script>
<style lang = 'scss' scoped>
	.aheader{
		display:flex;
		justify-content: center;
		align-items: center;
		font-size:4rem;
		position:fixed;
		z-index:99;
		top:0;
		left:0;
		right:0;
		height: 5.22rem;
		background: #fff;
		padding:0 2rem;
		.back,.more{
			width:2rem;
		}
		.title{
			flex:1;
			text-align: center;
		}
	}
	.anav{
		display:flex;
		position:fixed;
		z-index:60;
		top:5.22rem;
		left:0;
		right:0;
		background: #fff;
		.navitem{
			flex:1;
			text-align:center;
			line-height: 2.64rem;
			color:#464646;
		}
	}
</style>
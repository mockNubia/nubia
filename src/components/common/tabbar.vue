<template>
		<div class="weui-tabbar tabbar">
			<router-link 
				exact
				active-class = 'weui-bar__item_on'
				v-for = '(tabbar,index) in tabbars'
				:key = "index"
				:to = "{name:tabbar.path}"
				class="weui-tabbar__item"
			 >
				<span style="display: inline-block;position: relative;">
					<i :class="'weui-tabbar__icon fa fa-'+tabbar.icon"></i>
				</span>
				<p class="weui-tabbar__label">{{tabbar.title}}</p>
			</router-link>
		</div>
</template>
<script>
	export default {
		name:'Tabbar',
		data(){
			return{
				tabbars:[
					{title:'首页',path:'home',icon:'home'},
					{title:'分类',path:'cate',icon:'th-large'},
					{title:'发现',path:'found',icon:'search'},
					{title:'购物车',path:'cart',icon:'shopping-cart'},
					{title:'我的',path:'mine',icon:'user-o'}
				]
			}
		}
	}
</script>
<style lang = 'scss'scoped>
	.tabbar{
		background: #f4f3ef;
		position:fixed;
		bottom:0;
		left:0;
		right:0;
	}
	.weui-tabbar__item.weui-bar__item_on{
		.weui-tabbar__icon,.weui-tabbar__label{color:#f05d4b}
	} 
</style>
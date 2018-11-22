<template>
	<div class="product main">这是手机页面</div>
</template>
<script>
	import { mapActions } from 'vuex'
	export default {
		name : 'Product',
		methods:{
			...mapActions(['changeTitle','aheader']),
			getRouter(){
				var path = this.$route.path;
				if(path === '/product'){
					this.changeTitle({title:'商品详情'})
				}
			},
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'cate':
					case 'accessory':
					case 'phone':
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
<style>
	
</style>
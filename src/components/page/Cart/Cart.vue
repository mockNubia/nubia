<template>
	<div class="cart">
		this is buycart
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
	export default {
		name:'Cart',
		data(){
			return{
				num:[]
			}
		},
		methods:{
			...mapActions(['aheader']),
			isShowHeader(){
				var path = this.$route.path.slice(1);
				console.log(path);
				switch(path){
					case 'cart':
					this.aheader({boolen:false});
					break;
					default :
					this.aheader({boolen:true});
				}
			}
		},
		created(){
			this.isShowHeader()
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
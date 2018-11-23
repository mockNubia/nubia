<template>
	<div class="found">
		这是发现页
	</div>
</template>
<script>
	import { mapActions } from 'Vuex'
	export default {
		name:'Found',
		data(){
			return{
				
			}
		},
		methods:{
			...mapActions(['aheader']),
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
			this.isShowHeader()
		}
	}
</script>
<style lang = 'scss' scoped>
	
</style>
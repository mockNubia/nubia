<template>
	<div class="found">
		this is found
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
					case 'found':
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
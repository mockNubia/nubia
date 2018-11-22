<template>
	<div class="mine">这是个人中心
	</div>
</template>
<script>
	import { mapActions } from 'Vuex'
	export default {
		name : 'Mine',
		methods:{
			...mapActions(['aheader','setUserInfo']),
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'mine':
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
<style>
	
</style>
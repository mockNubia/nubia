<template>
	<div class="phone main">这是手机页面---{{id}}----{{paramsId}}</div>
</template>
<script>
	import { mapActions } from 'vuex'
	export default {
		name : 'Phone',
		props:['id'],
		data(){
			return {
				paramsId:'',
			}
		},methods:{
			...mapActions(['changeTitle']),
			getRouter(){
				var path = this.$route.path;
				console.log(path);
				if(path === '/phone'){
					this.changeTitle({title:'努比亚手机'})
				}
			},
		},
		created(){
			this.getRouter();
			this.paramsId = this.$route.query.id;
		}
	}
</script>
<style>
	
</style>
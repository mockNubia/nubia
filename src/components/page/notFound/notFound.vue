<template>
	<div class="notFound">
		你访问的页面不存在，请返回
		<router-link :to = "{name:'home'}">首页</router-link>
	</div>
</template>
<script>
	export default {
		name:'NotFound'
	}
</script>
<style lang = 'scss' scoped>
	.notFound{
		display:flex;
		flex:1;
		margin:0 0 5rem 0;
	}
</style>
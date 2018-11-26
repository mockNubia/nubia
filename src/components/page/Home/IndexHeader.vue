<template>
	<div class="indexHeader" v-if = "$route.path == '/'">
		<span class="logo">
			<img src="../../../assets/m-logo.png" alt="">
		</span>
		<router-link 
			class="person fa fa-user-o"
			:to = 'topath'
			> {{username}}</router-link>
	</div>
</template>
<script>
	export default {
		name:'IndexHeader',
		data(){
			return{
				username:'登录',
				topath:'/mine/login'
			}
		},
		methods:{
			islogin(){
				let storage = window.localStorage;
				let username = storage.username;
				let password = storage.password;
				if(username&&password){
					this.username=username;
					this.topath = '/mine/info';
				}else{
					this.username='登录';
					this.topath = '/mine/login';
				}
			}
		},
		created(){
			this.islogin();
		},
		activated(){
			this.islogin();
		}
		
	}
</script>
<style lang = "scss" scoped>
	.indexHeader{
		position:fixed;
		top:0;
		left:0;
		right:0;
		z-index: 99;
		display:flex;
		justify-content: space-between;
		align-items: center;
		background: #000;
		box-shadow: rgba(0,0,0,.4) 0 0.6rem 1rem;
		.logo{
			width:22rem;
			margin-left: 1.5rem;
			img{
				width:16rem;
				vertical-align:middle;
			}
		}
		.person{
			line-height: 5rem;
			font-size:3.2rem;
			color:#fff;
			background: #e0523a;
			height:5.22rem;
			padding:0 1rem;
			margin-right:1.5rem;
		}
	}
</style>
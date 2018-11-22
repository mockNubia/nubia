<template>
	<div class="cateList">
		<ul class = 'cateItem'>
			<router-link :to = "{name:path,query:{id:cate.id}}" class = 'items'
			 v-for = 'cate in cateList.result'
			 :key = "cate.id"
			 >
				<img v-lazy="'../../../../static/imgs/'+cate.image" alt="">
				<p>{{cate.name}}</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'CateList',
		props:['type','path'],
		data(){
			return{
				cateList:[],
				
			}
		},
		created(){
			var url = '../../../../static/json/'+this.type+'.json';
			this.$Axios.get('../../../../static/json/'+this.type+'.json')
			.then((res)=>{
				this.cateList = res.data.data;
			})
			.catch((err)=>{
			})
		}
	}
</script>
<style lang = 'scss' scoped>
	.cateList{
		text-align: center;
		.cateItem{
			display:flex;
			align-items: center;
			flex-wrap:wrap;
			.items{
				list-style: none;
				padding:2rem 0.83rem;
				width:25%;
				img{
					width:100%;
				}
				p{
					font-size:2rem;
					color:#4f4f4f;
				}
			}
		}
	}
</style>
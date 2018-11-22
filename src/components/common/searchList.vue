<template>
	<div class="search">
		<div class="searchList">
			<div class="searchAll" @click = 'showSearch'>
				{{searchTitle}}
				<i class = 'fa fa-caret-down'></i>
				<div class="searchItems border_bottom" v-show = 'isShowSearch'>
					<div :class="['searchItem',index == searchItems['length']-1 ? '':'border_bottom']"
					v-for = '(searchItem,index) in searchItems'
					:key = 'searchItem.product_id'
					@click = 'changeSearch(searchItem.name,searchItem.product_id)'
					>{{searchItem.name}}</div>
				</div>
			</div>
			
			<div :class="['newProduct',isActive == 1 ? 'active':'']" @click = 'activeItem'>最新上架</div>
			<div :class="['priceSort',isActive == 2 ? 'active':'']" @click = 'isPriceSort'>
				价位
				<i class = 'fa fa-arrow-up' v-show = '!priceSort'></i>
				<i class = 'fa fa-arrow-down' v-show = 'priceSort'></i>
			</div>
		</div>
		<div class = 'bottom_border'></div>
	</div>
</template>
<script>
	export default {
		name:'SearchList',
		props:['changeSearchId'],
		data(){
			return{
				priceSort:false,
				isActive: 0,
				isShowSearch:false,
				searchItems:[],
				searchTitle:''
			}
		},
		methods:{
			isPriceSort(){
				this.priceSort = !this.priceSort;
				this.isActive = 2;
			},
			activeItem(){
				this.isActive = 1
			},
			getSearch(){
				var path = this.$route.path.slice(1);
				
				if( path == 'phone'){
					this.$Axios.get('../../../static/json/phoneType.json')
					.then((res)=>{
						console.log(res.data.data);
					})
					.catch((err)=>{
						console.log(err);
					})
				}else if( path == 'accessory'){
					this.$Axios.get('../../../static/json/accType.json')
					.then((res)=>{
						var getData = res.data.data['result'];
						this.searchItems = getData;
						for(var i = 0; i<this.searchItems.length;i++){
							
							if(this.searchItems[i].product_id == this.$route.query.id){
								this.searchTitle = this.searchItems[i].name;
							}
						}
					})
					.catch((err)=>{
						console.log(err);
					})
				}
			},
			showSearch(){
				this.isShowSearch = !this.isShowSearch;
			},
			changeSearch(name,id){
				this.searchTitle = name;
				this.changeSearchId(id);
			}
		},
		created(){
			this.getSearch();
		}
	}
</script>
<style lang = 'scss' scoped>
	.searchList{
		height:5.22rem;
		display:flex;
		justify-content: center;
		align-items: center;
		div{
			flex:1;
			text-align: center;
			color:#9a9b9d;
		}
		.searchAll{
			color:#51545a;
			position:relative;
			.searchItems{
				position:absolute;
				background: #fff;
				top:4.6rem;
				left:0;
				right:0;
				width:39rem;
				padding:0 3rem;
				.searchItem{
					text-align: left;
					line-height: 5rem;
					padding:0 3rem;
				}
			}
		}
		.priceSort{
			i{
				font-size:2.2rem;
				vertical-align: top;
				margin-top:0.8rem;
				color:#9a9b9d;
			}
		}
		.newProduct.active,.priceSort.active{
			color:red;
		}
	}
	.bottom_border{
		border:0 none;
	}
</style>
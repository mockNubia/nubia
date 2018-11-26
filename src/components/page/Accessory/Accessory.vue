<template>
	<div class="accessory main">
		<SearchList 
		:changeSearchId = 'changeSearchId'
		:isPriceSort = '_isPriceSort'
		:isNewSort = '_isNewSort'
		></SearchList>
		<div class="showList">
			<ShowProductItem
			    :type = 'type'
				:showProduct = 'accList'
				:changeId = 'searchId'
				:newSort = 'newSort'
				:priceSort = 'priceSort'
			></ShowProductItem>
		</div>
	</div>
</template>
<script>
	import ShowProductItem from '../../common/showProductItem.vue'
	import SearchList from '../../common/searchList.vue' 
	
	export default {
		name:'Accessory',
		data(){
			return{
				accList:[],
				type:2,
				searchId:100,
				priceSort:false,
				newSort:false,
			}
		},
		components:{
			ShowProductItem,
			SearchList
		},
		methods:{
			getAccessory(){
				this.$Axios.get('../../../../static/json/searchAcc.json')
				.then((res)=>{
					var data = res.data.data;
					this.accList = data['result'];
				})
			},
			changeSearchId(id){
				this.searchId = id;
			},
			_isPriceSort(){
				this.priceSort = !this.priceSort;
				this.newSort = false;
			},
			_isNewSort(){
				this.newSort = true;
			}
		},
		created(){
			this.getAccessory();
			this.changeSearchId(this.$route.query.id);
		}
	}
</script>
<style lang = 'scss' scoped>
	.accessory{
		min-height: 60vh;
		.showList{
			background: #f6f6f6;
		}
	}
</style>
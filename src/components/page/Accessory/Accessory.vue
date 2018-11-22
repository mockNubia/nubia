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
	
	import { mapActions } from 'vuex' 
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
			...mapActions(['changeTitle','aheader']),
			getRouter(){
				var path = this.$route.path;
				if(path === '/accessory'){
					this.changeTitle({title:'配件'})
				}
			},
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'accessory':
					this.aheader({boolen:true});
					break;
					default :
					this.aheader({boolen:false});
				}
			},
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
			this.getRouter();
			this.isShowHeader();
			this.getAccessory();
			this.changeSearchId(this.$route.query.id);
		}
	}
</script>
<style lang = 'scss' scoped>
	.accessory{
		.showList{
			background: #f6f6f6;
		}
	}
</style>
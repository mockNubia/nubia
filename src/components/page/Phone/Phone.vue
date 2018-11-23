<template>
	<div class="phone main">
		<SearchList 
		:changeSearchId = 'changeSearchId'
		:isPriceSort = '_isPriceSort'
		:isNewSort = '_isNewSort'
		></SearchList>
		<PhoneList
		:changeId = 'searchId'
		:newSort = 'newSort'
		:priceSort = 'priceSort'
		></PhoneList>
	</div>
</template>
<script>
	import SearchList from '../../common/searchList'
	import PhoneList from './PhoneList'
	export default {
		name : 'Phone',
		props:['id'],
		data(){
			return {
				paramsId:'',
				searchId:100,
				priceSort:false,
				newSort:false
				
			}
		},
		components:{
			SearchList,PhoneList
		},
		methods:{
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
			this.paramsId = this.$route.query.id;
			this.changeSearchId(this.paramsId);
		}
	}
</script>
<style>
	.phone{
		min-height: 125vh;
	}
</style>
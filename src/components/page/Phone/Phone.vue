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
	import { mapActions } from 'vuex'
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
			...mapActions(['changeTitle','aheader']),
			getRouter(){
				var path = this.$route.path;
				if(path === '/phone'){
					this.changeTitle({title:'努比亚手机'})
				}
			},
			changeSearchId(id){
				this.searchId = id;
			},
			isShowHeader(){
				var path = this.$route.path.slice(1);
				switch(path){
					case 'cate':
					case 'accessory':
					case 'phone':
					this.aheader({boolen:true});
					break;
					default :
					this.aheader({boolen:false});
					}
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
			this.paramsId = this.$route.query.id;
			this.changeSearchId(this.paramsId);
			this.isShowHeader()
		}
	}
</script>
<style>
	
</style>
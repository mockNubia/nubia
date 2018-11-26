<template>
	<div class="phoneList">
		<router-link 
			class="phoneItems" 
			v-for="item in phoneList" 
			:key="item.sid"
			:to = "{name:'product',query:{id:item.sid}}"
		>
			<div class="phoneItem">
				<div class="phoneImg">
					<img v-lazy="'../../../../static/imgs/'+item.image" alt="">
				</div>
				<div class="phoneText">
					<p class="phoneTitle">{{item.title}} {{item.color_name}} {{item.spec_value}}</p>
					<p class="phoneSec" v-if="item.product_point!=''">{{item.product_point}}</p>
					<p class="phonePrice">{{item.price}}元
						<del v-if="item.price != item.origin_price">{{item.origin_price}}</del>
					</p>
				</div>
			</div>
			<div class="bottom_border"></div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: 'PhoneList',
		props: ['changeId', 'newSort', 'priceSort'],
		data() {
			return {
				phoneLists: []
			}
		},
		methods: {
			getPhoneData() {
				this.$Axios.get('../../../../static/json/searchPhone.json')
					.then((res) => {
						this.phoneLists = res.data.data['result'];
					})
			}
		},
		computed: {
			phoneList: function() {
				if (this.changeId == 100) {
					return this.phoneLists;
				}
				return this.phoneLists.filter((item) => {
					return item.id == this.changeId;
				})
			}
		},
		watch: {
			priceSort: function(newVal, oldVal) {
				if (newVal) {
					this.phoneLists.sort((a, b) => {
						return b.price - a.price
					})
				} else {
					this.phoneLists.sort((a, b) => {
						return a.price - b.price
					})
				}
			},
			newSort: function(newVal, oldVal) {
				if (newVal) {
					this.phoneLists.sort((a, b) => {
						return b.sid - a.sid
					})
				} else {
					return false
				}
			}

		},
		created() {
			this.getPhoneData();
		}
	}
</script>
<style lang='scss' scoped>
	.phoneList {
		.phoneItems {
			.phoneItem {
				display: flex;
				padding: 2rem 0;

				.phoneImg {
					width: 11.74rem;

					img {
						width: 100%;
					}
				}

				.phoneText {
					font-size: 3rem;

					.phoneTitle {
						color: #4f4f4f;
					}

					.phoneSec {
						color: #a0a0a0;
						font-size: 2.2rem;
						padding: 0.5rem 0;
					}

					.phonePrice {
						color: rgb(255, 103, 0);
						padding: 0.5rem 2rem;

						del {
							color: rgb(139, 139, 139);
						}
					}
				}
			}

			.bottom_border {
				border: 0 none;
			}
		}
	}
</style>

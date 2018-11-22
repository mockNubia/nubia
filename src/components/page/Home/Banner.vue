<template>
	<!-- Swiper -->
	<div class="swiper-container banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners" :key='banner.id'>
				<img :src="'../../../../static/imgs/'+banner.small_image" alt="">
			</div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import '../../../../node_modules/swiper/dist/css/swiper.min.css'

	import Vue from 'vue'

	export default {
		name: 'Banner',
		data() {
			return {
				banners: [],
			}
		},
		methods: {

		},
		created() {
			this.$Axios.get('./../../../../static/json/banner.json')
				.then((res) => {
					this.banners = res.data.data['501'];
					Vue.nextTick(() => {
						var swiper = new Swiper('.banner', {
							loop: true,
							autoplay: true,
							pagination: {
								el: '.swiper-pagination',
							},
						});
					})
				})
				.catch((err) => {
					alert(err)
				})
		}
	}
</script>
<style lang='scss' scoped>
	.swiper-slide {
		font-size:0;
		img {
			width:100%;
		}
	}
</style>

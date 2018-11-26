<template>
	<div class="productMain">
		<div class="pic">
			<img :src="`../../../../static/imgs/${proimg}`" :alt="proid">
		</div>
		<div class="bottom_border"></div>
		<p class = 'productitle'>{{protitle}} {{procolor}}<i class = 'share fa fa-share-alt'></i></p>
		<p class="proprice">￥{{proprice}}.00元</p>
		<p class="sale">促销</p>
		<div class = 'song'>
			<p><span>赠牛豆</span>购买完成可获得与支付金额相同数目的牛豆</p>
			<p><span>包邮</span>普通和青铜会员满59、白银满39、黄金以上包邮</p>
		</div>
		<div class="bottom_border"></div>
		<div class="dress">
			<p>送至 <i class = 'fa fa-map-pin'></i> 广东省 广州市 荔湾区</p>
		</div>
		<div class="bottom_border"></div>
		<div class="chooseColor">
			<p>颜色</p>
			<div class="color">
				<span class="cirle"></span>
				透明
			</div>
		</div>
		<div class="recommed">
			<p>为你推荐</p>
			<img src="../../../../static/imgs/pic/152274208068.png" alt="">
			<p class = "size">Z18mini</p>
		</div>
		<div class="detal">
			<img src="../../../../static/imgs/detail/5acf18fb521d293.jpg" alt="">
		</div>
		<div class="detal">
			<img src="../../../../static/imgs/detail/5acf18fb759df99.jpg" alt="">
		</div>
		<div class="detal">
			<img src="../../../../static/imgs/detail/5acf18fb72b0c32.jpg" alt="">
		</div>
		<div class="detal">
			<img src="../../../../static/imgs/detail/5acf18fb71c317.jpg" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name:'ProudctMain',
		props:['buypro','addInCar','addCar'],
		data(){
			return{
				proid:'',
				protitle:'',
				proprice:0,
				proimg:'',
				procolor:'',
				proesc:[]
			}
		},
		methods:{
			getpro(){
				var query = this.$route.query;
				this.proid = query.id;
				this.protitle = query.title;
				this.proprice = query.price;
				this.proimg = query.imgUrl;
				this.procolor = query.color_name;
			},
			getCars(){
				this.proesc = JSON.parse(localStorage.proesc ? localStorage.proesc:'[]')
			},
			setCars(){
				var pro = {};
				pro.id = this.proid;
				pro.title = this.protitle;
				pro.price = this.proprice;
				pro.img = this.proimg;
				pro.color_name = this.procolor;
				var has = this.proesc.some((item)=>{
					if(item.id === pro.id){
						item.num++;
						console.log(111);
						return true;
					}
				});
				if(!has){
					pro.num = 1;
					this.proesc.unshift(pro);
				}
				localStorage.proesc = JSON.stringify(this.proesc);
			}
		},
		watch:{
			addInCar:function(newVal,oldVal){
				if(newVal){
					this.setCars();
					this.addCar();
				}
			},
			buypro:function(newVal,oldVal){
				if(newVal){
					this.setCars();
					this.$emit('addCar');
					this.$router.push('/cart');
				}
			}
		},
		created(){
			this.getpro();
			this.getCars();
		}
	}
</script>

<style lang = 'scss' scoped>
	.productMain{
		.pic{
			width:100%;
			padding:0 2rem;
			img{
				width:100%;

			}
		}
		.productitle{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size:3.6rem;
			color:#666;
			padding:0 1rem;
			.share{
				
			}
		}
		.proprice{
			color:#ff4d4d;
			font-size:3.6rem;
			padding-left: 1rem;
		}
		.sale{
			margin-top: 5rem;
			padding: 1rem;
			border-top:1px solid #ccc;

		}
		.song{
			border-top:1px solid #ccc;
			padding:1rem;
			font-size:2.6rem;
			p{
				line-height: 3.2rem;
				span{
					border:1px solid #ff4d4d;
					padding:0.4rem;
					margin-right: 1rem;
				}
			}
		}
		.dress{
			padding: 1rem;
			.fa{
				color:#ff4d4d;
			}
		}
		.chooseColor{
			padding:1rem;
			.color{
				border:1px solid #ff4d4d;
				width:8rem;
				border-radius: 5rem;
				padding:0.4rem 1rem;
				.cirle{
					display: inline-block;
					vertical-align: middle;
					border:1px solid #ff4d4d;
					width:1.6rem;
					height: 1.6rem;
					border-radius: 50%;
				}
			}
			
		}
		.recommed{
			padding:1rem;
			background: #eee;
			color:#777;
			img{
				width:10rem;
				background: #fff;
			}
			.size{
				padding-left: 2rem;
				line-height: 2rem;
				font-size: 2.6rem;
			}
		}
	}
	.detal{
		width:100%;
		font-size:0;
		img{
			width:100%;
		}
	}
	.bottom_border{
		border:0 none;
		height: 3px;
		
	}
	
</style>

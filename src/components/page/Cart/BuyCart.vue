<template>
	<div class="buy_cart">
		<div class="buied">
			<div
				v-for = "num in nums"
				:key = 'num.id'
			>
				<div class="bottom_border"></div>
				<div class="buiedItem">
						<div class="img">
							<img :src="`/static/imgs/${num.img}`" alt="">
						</div>
						<div class="incTitle">
							<p class = 'title'>{{num.title}}({{num.color_name}})</p>
							<p class = 'sale'> 
								<span class = "salePrice">售价：￥{{num.price}}元</span>
							</p>
							<hr>
							<div class = 'marth'>
								<div>
									<span class = 'reduce' @click = 'recutOne(num.id)'>-</span>
									<span class = "litleNum">{{num.num}}</span>
									<span class = "addOne" @click = 'addOne(num.id)'>+</span>
								</div>
								<div>
									<span class = 'litleTotail'>小计：￥{{num.price*num.num}}元</span>
								</div>
							</div>
						</div>
						<div class="del" @click = "delproduct(num.id)">
							<span>X</span>
						</div>
					</div>
			</div>
			<!-- 加价购 -->
			<div 
				v-for = "incItem in increaseItem"
				:key = 'incItem.sid+1'
			>
				<div class="bottom_border"></div>
				<div class="increaseItem">
					<div class="img">
						<img :src="`/static/imgs/${incItem.image}`" alt="">
					</div>
					<div class="incTitle">
						<p class = 'title'>{{incItem.title}}({{incItem.color_name}})</p>
						<p class = 'sale'> 
							<span class = 'addprice_buy'>加价购</span>
							<span class = "salePrice">售价：￥{{incItem.price}}元</span>
						</p>
					</div>
				</div>
			</div>
			
		</div>
		<!-- 加价选品 -->
		<div class="bottom_border"></div>
		<div class="increase border_bottom"
			v-for = "incr in increase"
			:key = "incr.id"
		>
			<i :class = "['cricle',incr.incshow ? 'fa fa-check':'']" @click = "putpro(incr.id)"></i>
			<div class="inctext">{{incr.title}}</div>
			<i class = 'fa fa-angle-right fa-lg'></i>
		</div>
		<!-- 合计 -->
		<div class="bottom_border"></div>
		<div class="addprice">
			<p>金额合计</p>
			<span>￥{{total}}元</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'BuyCart',
		props:['nums'],
		data(){
			return{
				incItem:[
					{
						"sid": 750,
						"title": "努比亚圈铁耳机",
						"color_name": "红色",
						"price": 80,
						"image": "pic/147747102535.jpg"
					},
					{
						"sid": 890,
						"title": "努比亚蓝牙耳机",
						"color_name": "白色",
						"price": 69,
						"image": "pic/14963715103.jpg"
					},
					{
						"sid": 785,
						"title": "努比亚炫美自拍杆",
						"color_name": "白金",
						"price": 29,
						"image": "pic/148524162779.png"
					},
					{
						"sid": 972,
						"title": "便携移动电源",
						"color_name": "灰白",
						"price": 89.,
						"image": "pic/152118859076.jpg"
					}
				],
				increaseItem:[],
				increase:[],
				total:0
			}
		},
		methods:{
			delproduct(id){
				this.nums.some((item,index)=>{
					if(item.id === id){
						this.nums.splice(index,1);
						localStorage.proesc = JSON.stringify(this.nums);
						this.totalprice();
					}
				})
			},
			addOne(id){
				this.nums.some((item)=>{
					if(item.id === id){
						item.num++;
					}
				})
				localStorage.proesc = JSON.stringify(this.nums);
				this.totalprice();
			},
			recutOne(id){
				this.nums.some((item)=>{
					if(item.id === id){
						if(item.num <= 1){
							item.mums = 1;
						}else{
							item.num--;
						}
					}
				})
				localStorage.proesc = JSON.stringify(this.nums);
				this.totalprice();
			},
			putpro(id){
				this.increase.some((item)=>{
					if(item.id === id){
						item.incshow = !item.incshow;
						localStorage.increase = JSON.stringify(this.increase);
						if(item.incshow){
							this.incItem.some((item)=>{
								if(item.sid === id){
									this.increaseItem.push(item);
								}
							})
						}else{
							this.increaseItem.some((item,index)=>{
								if(item.sid === id){
									this.increaseItem.splice(index,1);
								}
							})
						}
					} 
				})
				this.totalprice();
			},
			getIncrease(){
				this.increase = JSON.parse(localStorage.increase);
				for(var w = 0;w < this.increase.length;w++){
					if(this.increase[w].incshow){
						this.increaseItem.push(this.incItem[w]);
					}
				}
			},
			totalprice(){
				var num1 = 0;
				var num2 = 0;
				if(this.nums.length > 0){
					for(var i = 0; i < this.nums.length; i++){
						num1 += this.nums[i].price*this.nums[i].num;
					}
				};
				if(this.increaseItem.length > 0){
					for(var j = 0; j < this.increaseItem.length; j++){
						num2 += this.increaseItem[j].price;
					}
				};
				this.total = num1 + num2;
			}
			
		},
		created(){
			this.getIncrease();
		},
		mounted(){
			this.totalprice();
		}
	}
</script>

<style lang = 'scss' scoped>
	.buy_cart{
		.buied{
			.buiedItem{
				
			}
			.buiedItem,.increaseItem{
				display:flex;
				padding:1rem;
				.img{
					width:7rem;
					img{
						width:100%;
					}
				}
				.incTitle{
					flex:1;
					.title{
					}
					.sale{
						font-size:2.7rem;
						margin-top:1rem;
						.addprice_buy{
							color:#fff;
							background: #70c603;
							padding: 0.3rem 0.6rem;
							margin-right: 0.6rem;
						}
						.salePrice{
							color:#87888c;
						}
					}
					.marth{
						padding:0.6rem 0;
						display: flex;
						justify-content: space-between;
						.reduce,.litleNum,.addOne{
							border:1px solid #ccc;
						}
						.reduce,.addOne{
							padding:0 0.6rem;
						}
						.litleNum{
							padding:0 3rem;
						}
						.litleTotail{
							font-size:2.6rem;
						}
					}
				}
				.del{
					width:2.8rem;
					height: 2.8rem;
					text-align: center;
					border-radius: 50%;
					color:#fff;
					background: #eee;
					font-weight: bold;
				}
			}
		}
		.increase{
			display:flex;
			justify-content: center;
			align-items: center;
			padding:1rem;
			color:#666;
			.cricle{
				border:1px solid #666;
				width:2.4rem;
				height: 2.4rem;
				border-radius: 50%;
				text-align: center;
				line-height: 2.4rem;
			}
			.fa-check{
				background: #e8380d;
				color:#fff;
			}
			.inctext{
				flex:1;
				padding-left: 1rem;
			}
		}
		.addprice{
			margin-bottom: 5.22rem;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2rem;
			p{
				flex:1;
				text-align: center;
				padding-left: 4rem;
			}
			span{
				color:#e60012;
				font-weight: bold;
			}
		}
	}
</style>

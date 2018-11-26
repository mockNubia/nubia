<template>
	<div class="info">
		<div class="user">
			<i class="fa fa-user-circle-o" aria-hidden="true"></i>
			<span v-if="!isLogin">
				<router-link v-for="(item,index) in list"
				:key="index"
				tag='span'
				:to='{name:item.path}'
				>{{item.name}}</router-link>
			</span>
			<span v-else>{{username}}<span class="quit" @click="quit">退出</span></span>
			
		</div>
		<div class="means">
			<ul>
				<li v-for="(item,index) in list1"
					:key="index">
					<p>{{item.num}}</p>
					<p>{{item.title}}</p>	
				</li>
			</ul>
		</div>
		<div class="bottom_border"></div>
		<div class="order">
			<div class="order_all">
				<span>全部订单</span>
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</div>
			<div>
				<ul>
					<li 
					v-for="(item,index) in list2"
					:key="index"
					>
					<img :src="item.src" alt="">
					<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="bottom_border"></div>
		<div class="list">
			<ul>
				<li 
				class = 'border_bottom'
				v-for="(item,index) in list3"
				:key="index"
				>
				{{item}}<i class="fa fa-angle-right" aria-hidden="true"></i>
				</li>
			</ul>
			<div class="bottom_border"></div>
			<ul>
				<li 
				class = 'border_bottom'
				v-for="(item,index) in list4"
				:key="index"
				>
				{{item}}<i class="fa fa-angle-right" aria-hidden="true"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
			username:null,
			isLogin:false,
            list: [{ name: '登录/', path: 'login' }, { name: '注册', path: 'reg' }],
            list1: [
                { num: '0', title: '优惠券' },
                { num: '￥0.00', title: '回收代金券' },
                { num: '0', title: '收藏' },
                { num: '0', title: '牛豆' }
            ],
            list2: [
                { name: '待付款', src: 'https://oss.static.nubia.cn/upload/59c0c094a248a53.png' },
                { name: '待收货', src: 'https://oss.static.nubia.cn/upload/59c0c094a99ad35.png' },
                { name: '已完成', src: 'https://oss.static.nubia.cn/upload/59c0c094a9c9851.png' }
            ],
            list3: [
                '收货地址',
                '我的预约',
                '我的回收订单',
                '我的NB码',
                '我的流量卡'
            ],
			list4: [
				'服务网点',
				'常见问题',
				'联系客服'
			]
        };
    },	
	created(){
		this.islogin()
	},
    methods: {
        goPage(path) {
            this.$router.push(path);
        },
		islogin(){
			let storage = window.localStorage;
			let username = storage.username;
			let password = storage.password;
			if(username&&password){
				this.isLogin=true;
				this.username=username
			}else{
				this.isLogin=false
			}
		},
		quit(){
			window.localStorage.clear();
			this.$router.push('/mine/login');
		}
    },

};
</script>

<style lang = 'scss' scoped>
.info {
    a {
        color: #000;
    }
}
.user {
    text-align: left;
    box-sizing: border-box;
    height: 10rem;
    line-height: 10rem;
    padding: 1rem 0 0 2rem;
    background: #e8340e;
	color: #fff;
	font-size: 5rem;
    i {
        font-size: 12rem;
    }
	.quit{
		padding: 0 5rem;
		font-size: 4rem;
	}
}
.means {
    p {
        height: 2rem;
        line-height: 2rem;
        font-size: 3rem;
    }
}
.order {
    padding-left: 2rem;
    .order_all {
        position: relative;
        font-size: 4rem;
        i {
            position: absolute;
            right: 2rem;
            line-height: 2.5rem;
        }
    }
    ul {
        li {
            height: 7.5rem;
            p {
                margin-top: -2rem;
                line-height: 2rem;
            }
            img {
                width: 5rem;
                height: 5rem;
            }
        }
    }
}
.list {
    
    padding-bottom: 5rem;
    ul {
		padding-left: 2rem;
        display: block;
        text-align: left;
        li {
            width: 100%;
            position: relative;
            i {
                position: absolute;
                right: 3rem;
                line-height: 5rem;
            }
        }
    }
    .gm {
        padding-top: 1rem;
    }
}
</style>

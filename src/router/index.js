import Vue from 'vue'
//引入路由
import Router from 'vue-router'
//引入home组件
import Home from '@/components/page/Home/Home'
//引入cate组件
import Cate from '@/components/page/Cate/Cate'
//引入mine组件
import Mine from '@/components/page/Mine/Mine'
import Reg from '@/components/page/Mine/Reg'
import Login from '@/components/page/Mine/Login'
import Info from '@/components/page/Mine/Info'
// 引入cart组件
import Cart from '@/components/page/Cart/Cart'
// 引入found组件
import Found from '@/components/page/Found/Found'
//引入Accessory组件
import Accessory from '@/components/page/Accessory/Accessory'
//引入NotFound组件
import NotFound from '@/components/page/NotFound/NotFound'
//引入Phone组件
import Phone from '@/components/page/Phone/Phone'
//引入Product组件
import Product from '@/components/page/Product/Product'
//注册路由
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
			props: true
		},
		{
			path: '/cate',
			name: 'cate',
			component: Cate,
			props: true
		},
		{
			path: '/mine',
			name: 'mine',
			component: Mine,
			props: true,
			children: [{
					path: 'info',
					name: 'info',
					component: Info,
					props: true
				}, {
					path: 'reg',
					name: 'reg',
					component: Reg,
					props: true
				},
				{
					path: 'login',
					name: 'login',
					component: Login,
					props: true
				}
			],
			redirect: '/mine/info'
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart,
			props: true
		},
		{
			path: '/found',
			name: 'found',
			component: Found,
			props: true
		},
		{
			path: '/accessory',
			name: 'accessory',
			component: Accessory,
			props: true
		},
		{
			path: '/phone',
			name: 'phone',
			component: Phone,
			props: true
		},
		{
			path: '/product',
			name: 'product',
			component: Product,
			props: true
		},
		{
			path: '/notFound',
			name: 'notFound',
			component: NotFound,
			props: true
		},
		{
			path: '**',
			redirect: '/notFound'
		}
	],
})




export default router
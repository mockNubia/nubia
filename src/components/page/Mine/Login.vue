<template>
	
	<div>
		<div class="logo">
			<img src="../../../../static/imgs/logo/m_logo.png" alt="">
		</div>
		<div class="login">
			<form class="login">
				<div class="name">
					<i class="fa fa-user-o"></i>
					<input placeholder="请输入用户名" v-model="username"></input>
				</div>
				<div class="name">
					<i class="fa fa-key"></i>
					<input placeholder="请输入密码" type="password" v-model="password"></input>
				</div>
				<button @click.prevent="login" class="btn_login">立即登录</button>
			</form>
		</div>
		<div class="list">
			<span>其他方式登录</span>
			<ul>
				<i
				v-for="(item,index) in icon"
				:key="index"
				:class="item"
				></i>
			</ul>
		</div>
		<div class="other">
			<router-link v-for="(item,index) in other"
			:key="index"
			tag='span'
			:to='{name:item.path}'
			>{{item.name}}</router-link>
		</div>
	</div>
	
</template>

<script>
export default {
    props: ['path'],
    data() {
        return {
            username: '',
            password: '',
            icon: ['fa fa-qq fa-2x', 'fa fa-weibo fa-2x', 'fa fa-wechat fa-2x'],
            other: [{ name: '立即注册', path: 'reg' }, { name: '忘记密码?' }]
        };
    },
    methods: {
        login() {
            let storage = window.localStorage;
            storage.username = this.username;
            storage.password = this.password;
            if (storage.username != '' && storage.password != '') {
                this.$router.push('/mine');
            } else {
                alert('请输入账号密码');
            }
        }
    }
};
</script>

<style lang = 'scss' scoped>
.logo {
    width: 50%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    img {
        display: block;
        width: 100%;
        line-height: 1;
        height: auto;
    }
}
.login {
    width: 100%;
    margin-bottom: 2rem;
    margin: 0 auto;
    padding: 0 1em;
    .name {
        margin-bottom: 2rem;
        position: relative;
        height: 5rem;
        padding: 1rem;
        width: 100%;
        display: block;
        font-size: 4rem;
        border-radius: 2rem;
        color: #313131;
        border: 1px solid #ddd;
        background: #fff;
        input {
            border: none;
            width: 90%;
            margin-top: -1rem;
            height: 3rem;
            font-size: 4rem;
        }
    }
    .btn_login {
        width: 100%;
        height: 4rem;
        background: #e8380d;
        color: #fff;
        border: none;
        display: inline-block;
        font-size: 4rem;
        min-height: 4rem;
        line-height: 2rem;
        padding: 1rem;
        border-radius: 1rem;
    }
}
.list {
    span {
        display: block;
        width: 100%;
        text-align: center;
        padding-top: 3rem;
    }
    i {
        padding: 2rem 2rem;
    }
}
.other {
    padding: 3rem 0 0 0;
    text-align: center;
    span {
        padding: 0 2rem;
        text-decoration: underline;
    }
}
</style>

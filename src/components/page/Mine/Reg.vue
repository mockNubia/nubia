<template>
		<div class="reg">
			<div>
			<form>
				<div>
					<input placeholder="请输入用户名" v-model="username"><br></input>
				</div>
				<p class="p1">用户名格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线</p>
				<div>
					<input label="密码" placeholder="请输入密码" type="password" v-model="password"></input>
				</div>
				<div>
					<input label="密码" placeholder="请再次输入密码" type="repassword" v-model="repassword"></input>
				</div>
				<p>注册即表示您同意遵守努比亚帐户的<a href="javescript:">用户协议</a>和<a href="javescript:">隐私协议</a></p>
				<button @click.prevent="reg">注册</button>
			</form></div>
			<div @click="go" class="go"><span>已有账号，马上去登录</span></div>
		</div>
</template>

<script>
export default {
    props: ['path'],
    data() {
        return {
            username: '',
            password: '',
            repassword: ''
        };
    },
    methods: {
        reg() {
            let reg = new RegExp('^[a-zA-Z]w{5,17}$');
            if (!reg.test(this.username)) {
                alert('请输入以字母开头，长度在6-18之间，只能包含字符、数字和下划线的正确用户名');
            } else {
                alert('注册成功');
                this.$router.push('/login');
            }
        },
        go() {
            this.$router.push('login');
        }
    }
};
</script>

<style lang = 'scss' scoped>
.reg {
    text-align: center;
    padding: 4rem 0 0 0;
    input {
        width: 25rem;
        height: 3.5rem;
        font-size: 4rem;
        margin: 1rem;
        color: #313131;
        border: 1px solid #a4a4a4;
        background: #fff;
        border-radius: 1rem;
        padding-left: 1rem;
        span {
            font-size: 2rem;
        }
        p {
            font-size: 2rem;
            padding: 2rem 0;
        }
    }
    .p1 {
        padding: 0 0 1rem 0;
    }
    a {
        color: #e8380d;
        font-size: 3rem;
        text-align: center;
        text-decoration: underline;
    }
    button {
        border: none;
        height: 4rem;
        border-radius: 2rem;
        width: 25rem;
        margin: 0 auto;
        display: block;
        float: none;
        background: #e8380d;
        color: #fff;
        font-size: 4rem;
    }
    .go {
       padding: 5rem 0 0 0;
			 span{
				 text-decoration: underline;
    }
}
</style>

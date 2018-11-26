<template>
	<div class="Mine">
		<div class="Mine_nav">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Login from './Login.vue';
import Reg from './Reg.vue';
import Info from './Info.vue';

export default {
    name: 'Mine',
    components: { Login, Reg, Info },
    data() {
        return {
            username: '',
            password: '',
            navlist: [{ title: '登录', path: 'login' }, { title: '注册', path: 'reg' }]
        };
    },
    methods: {
        toggle(val) {
            this.selInit = val;
        },
		login() {
			let storage = window.localStorage;
			storage.username = this.username;
			storage.password = this.password;
		}
    }
};
</script>

<style>
.Mine ul {
    display: flex;
    text-align: center;
    justify-content: center;
    list-style: none;
}
.Mine ul li {
    width: 50%;
    height: 5rem;
    line-height: 5rem;
}
.Mine ul li button {
    width: 4rem;
    height: 2rem;
}
.sel {
    border-bottom: 2px solid #fe6e00;
    color: #fe6e00;
}
.Mine .fa-2x {
    color: #e8340e;
}
</style>

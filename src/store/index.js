import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
  const store = new vuex.Store({
	state:{
		name:'dafsioi',
		headerTitle:'',
		aheader:false,
		tabbar:true
	},
	mutations: {
    CHANGETITLE (state,title) {
      state.headerTitle = title;
    },
		AHEADER (state,boolen) {
			state.aheader = boolen;
		},
		TABBAR (state,boolen) {
			state.tabbar = boolen;
		}
  },
	actions: {
		changeTitle (context,{title}) {
			context.commit('CHANGETITLE',title)
		},
		aheader (context , {boolen}) {
			context.commit('AHEADER',boolen)
		},
		tabbar (context , {boolen}) {
			context.commit('TABBAR',boolen)
		}
	}
})
export default store

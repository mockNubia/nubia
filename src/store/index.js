import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
  const store = new vuex.Store({
	state:{
		name:'dafsioi',
		headerTitle:'',
		aheader:false,
	},
	mutations: {
    CHANGETITLE (state,title) {
      state.headerTitle = title;
    },
		AHEADER (state,boolen) {
			state.aheader = boolen;
			console.log(state.aheader);
		}
  },
	actions: {
		changeTitle (context,{title}) {
			context.commit('CHANGETITLE',title)
		},
		aheader (context , {boolen}) {
			context.commit('AHEADER',boolen)
		}
	}
})
export default store
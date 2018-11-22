import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
 export default new vuex.Store({
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
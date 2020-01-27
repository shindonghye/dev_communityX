import Vue from 'vue'
import Vuex from 'vuex'


import member from './modules/member.js'
import profile from './modules/profile.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		member,
		profile,
	},
})
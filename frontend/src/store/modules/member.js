//api import. 신동혜
import memberList from '../../api/memberList'

const state = {
	all: []
}

const getters = {
	
}

const actions = {
	getAllMembers ({ commit }) {
		memberList.getMemberList(payload => {
			commit('setMemberList', payload)
		})
	}
}

const mutations = {
		setMemberList (state, payload) {
		state.all = payload
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
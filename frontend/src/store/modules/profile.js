const state = {
	items: [],
}

const getters = {
	clickMember: (state, getters, rootState) => {
		return state.items.map(({ id }) => {
			const member = rootState.member.all.find(member => member.id === id)
			return {
				name: member.name,
				phone: member.phone,
				gender: member.gender,
				address: member.address
			}
		})
	}
}
	
// actions
const actions = {
	searchProfile({ state, commit }, member) {
		commit('setMember', { id: member.id, state });
	},
}

const mutations = {
	setMember(state, { id }) {
		state.items = [];
		state.items.push({
			id,
		})
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
import {createStore} from "vuex"

const store = createStore({
	state: {
		message: "hello vuex",
	},
	mutations: {
		setMessage(state, message) {
			state.message = message
		},
	},
	actions: {
		setMessage({commit}, payload) {
			commit("setMessage", payload)
		},
	},
	getters: {
		getMessage(state) {
			return state.message
		},
	},
})

export default store

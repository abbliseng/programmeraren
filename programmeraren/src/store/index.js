import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'home',
    currentUser: undefined
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    }
  },
  mutations: {
    setCurrentPage(state, p) {
      state.currentPage = p
    },
    setCurrentUser(state, p) {
      state.currentUser = p
    }
  },
  actions: {
  },
  modules: {
  }
})

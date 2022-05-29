import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'home',
    db: ''
  },
  getters: {
  },
  mutations: {
    setCurrentPage(state, p) {
      this.state.currentPage = p
    },
    setDb(state, p) {
      this.state.db = p
    }
  },
  actions: {
  },
  modules: {
  }
})

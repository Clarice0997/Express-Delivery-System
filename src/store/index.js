import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginIndex: false
  },
  getters: {},
  mutations: {
    setLoginIndex(state, data) {
      state.loginIndex = data
    }
  },
  actions: {
    setLoginIndex({ commit }, data) {
      commit('setLoginIndex', data)
    }
  },
  modules: {}
})

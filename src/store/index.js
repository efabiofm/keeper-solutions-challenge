import Vue from 'vue'
import Vuex from 'vuex'
import { find, findIndex, reject } from 'lodash'
import userRoles from './user_roles.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userRoles
  },
  getters: {
    getRole: (state) => (id) => {
      return find(state.userRoles, { id })
    }
  },
  mutations: {
    addRole(state, role) {
      state.userRoles.push(role)
    },
    updateRole(state, role) {
      const i = findIndex(state.userRoles, { id: role.id })
      state.userRoles[i] = role;
    },
    removeRole(state, id) {
      state.userRoles = reject(state.userRoles, { id })
    }
  }
})
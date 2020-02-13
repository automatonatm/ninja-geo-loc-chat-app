import Vue from 'vue'
import Vuex from  'vuex'

import firebase  from 'firebase'
//import firestore from 'firebase/firestore'

Vue.use(Vuex)

export const  store = new Vuex.Store({
  state: {
    loading: false,
    error: null,
    user:  null
  },

  mutations: {
    setUser(state, payload) {
       state.user = payload.user
    },

    setLoading(state, payload) {
      state.loading = payload
    },

    setError(state, payload) {
      state.error = payload
    },

    clearError(state) {
      state.error = null
    }
  },

  actions: {
    autoSignIn({commit}, payload) {
      commit('setUser',{
        user: payload
      } )
    },

    signUserIn({commit}, payload) {
      commit('clearError')
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(({user}) => {

          commit('setLoading', false)
        })
        .catch((error) =>  {
          commit('setLoading', false)
          commit('setError', error)
      })

    },
    logout({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)

    },
    clearError({commit}) {
      commit('clearError')
    },
  },

  getters: {

    loading: state => {
      return state.loading
    },

    error: state => {
      return state.error
    },

    user: state => {
      return state.user
    }
  }
})

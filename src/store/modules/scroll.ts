import { Module } from 'vuex'
import { RootState } from '../index'

export interface ScrollState {
  scrollY: number
  showNav: boolean
}

const state: ScrollState = {
  scrollY: 0,
  showNav: true
}
const mutations = {
  changeScrollY: (state: ScrollState, payload: number) => {
    state.scrollY = payload
  },
  changeHiddenNav: (state: ScrollState, payload: boolean) => {
    state.showNav = payload
  }
}
const actions = {
  asyncChangeScrolly: ({ commit }, payload: number) => {
    commit('changeScrollY', payload)
  },
  asyncChangeHiddenNav: ({ commit }, payload: boolean) => {
    commit('changeHiddenNav', payload)
  }
}
const getters = {
  getScrollY: (state: ScrollState) => state.scrollY,
  getHiddenTop: (state: ScrollState) => {
    if (state.scrollY >= 400) {
      return true
    }
    return false
  },
  getHiddenNav: (state: ScrollState) => state.showNav
}

export const scroll: Module<ScrollState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

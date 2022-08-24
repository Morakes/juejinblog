import { Module } from 'vuex'
import { RootState } from '../index'
import { IRouter } from '@/typings/router'

export interface RouterState {
  route: Array<IRouter>
  active: string
}

const state: RouterState = {
  route: [],
  active: ''
}

const mutations = {
  changeActive(state: RouterState, payload: string) {
    state.active = payload
  },
  changeRoute(state: RouterState, payload: Array<IRouter>) {
    state.route = payload
  }
}

const actions = {
  changeActive({ commit }, payload: string) {
    commit('changeActive', payload)
  },
  changeRoute({ commit }, payload: Array<IRouter>) {
    commit('changeRoute', payload)
  }
}

const getters = {
  getActive: (state: RouterState) => state.active,
  getRoute: (state: RouterState) => {
    const routeArr = state.route[0].children
    if (routeArr) {
      routeArr.sort((a: IRouter, b: IRouter) => {
        return <number>a.meta.sort - <number>b.meta.sort
      })
    }
    return routeArr
  }
}

export const router: Module<RouterState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

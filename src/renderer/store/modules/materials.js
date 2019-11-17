const state = {
  layers: [],
  fields: []
}

const mutations = {
  setLayers(state, payload) {
    console.log('mute', payload)
    state.layers = payload
  },
  setFields(state, payload) {
    console.log('mute', payload)
    state.fields = payload
  }
}

const actions = {
  addLayers({ commit }, payload) {
    console.log('action', payload)
    commit('setLayers', payload)
  },
  addFields({ commit }, payload) {
    console.log('action', payload)
    commit('setFields', payload)
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}

const state = {
  layers: [],
  fields: [],
  items: []
}

const mutations = {
  setLayers(state, payload) {
    state.layers = payload
  },
  setFields(state, payload) {
    state.fields = payload
  },
  setMaterialItem(state, payload) {
    state.items.push(payload)
  }
}

const actions = {
  addLayers({ commit }, payload) {
    commit('setLayers', payload)
  },
  addFields({ commit }, payload) {
    commit('setFields', payload)
  },
  addMaterialItem({ commit }, payload) {
    commit('setMaterialItem', payload)
  }
}

const getters = {
  getFields: state => {
    return state.fields
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

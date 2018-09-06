export const state = () => ({
  user: {}
})

export const mutations = {
  SET_ITEMS(state, value) {
    state.user = value
  }
}


export const actions = {
  Set({
    commit
  }, value) {
    commit('SET_ITEMS', value)
  }
}

export const getters = {
  Get: state => {
    return state.user
  },
}

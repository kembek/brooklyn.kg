import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState(
    {
      key: 'lang',
      paths: ['index']
  }
)(store)
}

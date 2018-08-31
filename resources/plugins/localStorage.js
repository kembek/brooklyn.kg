import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState(
    {
      key: 'Order',
      paths: ['Order']
  }
)(store)
}

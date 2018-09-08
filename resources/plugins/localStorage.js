import createPersistedState from 'vuex-persistedstate'

export default ({
  store
}) => {
  createPersistedState(
    {
      key: 'Lang',
      paths: ['Lang']
    },
    {
      key: 'User',
      paths: ['User']
    }
)(store)
}

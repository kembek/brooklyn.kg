export const state = () => ({
  // Возможные языки
  lang: {
    locales: [{
      code: 'ru',
      title: 'Русский'
    }, {
      code: 'en',
      title: 'English'
    }, {
      code: 'kg',
      title: 'Кыргыз тили'
    }],
    locale: 'ru'
  }
})

export const mutations = {
  SET_LANG(state, locale) {
    state.lang.locale = locale
  }
}

export const actions = {
  SetLocale({
    commit
  }, value) {
    commit('SET_LANG', value)
  },
}

export const getters = {
  lang: state => {
    return state.lang
  },
}

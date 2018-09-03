export const state = () => ({
  // Возможные языки
  locales: [{
    code: 'ru',
    title: 'Русский'
  }, {
    code: 'en',
    title: 'English'
  }],
  locale: 'ru',
})

export const mutations = {
  SET_LANG(state, locale) {
      state.locale = locale
  }
}

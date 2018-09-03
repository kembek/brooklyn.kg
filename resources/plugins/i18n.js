import Vue from 'vue'
import VueI18n from 'vue-i18n'

let m = new Object;

Vue.use(VueI18n)

export default ({
  app,
  store,
  params
}) => {
  store.state.locales.map(({
    code
  }) => {
    m[`${code}`] = require(`~/locales/${code}-${code.toUpperCase()}.json`)
  })

  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: params.lang || 'ru',
    messages: m
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}

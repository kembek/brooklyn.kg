import Vue from 'vue'
import VueI18n from 'vue-i18n'

let m = new Object;

Vue.use(VueI18n)

export default ({
  app,
  store,
  params
}) => {
  store.getters['Lang/lang'].locales.map(({
    code
  }) => {
    m[`${code}`] = require(`~/locales/${code}-${code.toUpperCase()}.json`)
  })

  app.i18n = new VueI18n({
    locale: store.getters['Lang/lang'].locale,
    fallbackLocale: params.lang || store.getters['Lang/lang'].locale || "ru",
    messages: m
  })
  store.dispatch("Lang/SetLocale", app.i18n.fallbackLocale);

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}

export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  if (isHMR) return
  const locale = params.lang || 'ru'

  for (let i = 0; i < store.state.locales.length; i++) {
    if (store.state.locales[i].code === locale) {
      break;
    } else if (i === store.state.locales.length - 1) {
      return error({
        message: 'Страница не найдена.',
        statusCode: 404
      })
    }
  }

  store.commit('SET_LANG', locale)

  app.i18n.locale = locale
}

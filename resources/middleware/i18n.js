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
  const locale = params.lang || store.getters['Lang/lang'].locale || "ru"
  for (let i = 0; i < store.getters['Lang/lang'].locales.length; i++) {
    if (store.getters['Lang/lang'].locales[i].code === locale) {
      break;
    }
    else if (i === store.getters['Lang/lang'].locales.length - 1 && route.path != "/") {
      return error({
        message: 'Страница не найдена.',
        statusCode: 404
      })
    }
  }

  store.dispatch("Lang/SetLocale", locale);

  app.i18n.locale = locale
}

export default async function ({
  app,
  redirect,
  store,
  params
}) {
  await app.$axios.$get('/auth/').then(({status, data}) => {
    if (status === 200) {
      store.dispatch('User/Set', data)
    }
    else
      redirect(`/${params.lang || store.getters['Lang/locale']}/login/`)
  }).catch(() => {
    redirect(`/${params.lang || store.getters['Lang/locale']}/login/`)
  })
}

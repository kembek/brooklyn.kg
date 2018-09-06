export default async function ({
  app,
  redirect,
  store,
  params
}) {
  await app.$axios.$get('/auth/').then(({status, data}) => {
    console.log(`STATUS: ${status};`)
    if (status == 200) {
      store.dispatch('User/Set', {
        id: data.user.id,
        access_id: data.user.access_id,
        surname: data.user.surname,
        first_name: data.user.first_name,
        middle_name: data.user.middle_name,
        phone: data.user.phone,
        email: data.user.email,
        description: data.user.description,
        max_groups: data.user.max_groups,
        is_status: data.user.is_status,
        access: data.access
      })
    }
    // else
      // redirect(`/${params.lang || store.getters['Lang/locale']}/login/`)
  }).catch(() => {
    // redirect(`/${params.lang || store.getters['Lang/locale']}/login/`)
  })
}

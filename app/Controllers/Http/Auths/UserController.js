'use strict'

const Hash = use('Hash')
const User = use('Auths/User')
const Accesses = use('Auths/Accesses')

class UserController {
  async login({
    request,
    auth,
    response
  }) {
    const {
      phone,
      password
    } = request.only(['phone', 'password'])

    try {
      const user = await auth.getUser()
      if (user.is_status) {
        return response.apiSuccess(user)
      }
    } catch (error) {
      try {
        const user = await auth.attempt(phone, password)

        if (user.is_status) {
          return response.apiSuccess(user)
        }

      } catch (error) {

        User.exceptions(error.message, error.status, error.code)
      }
    }

    return response.apiForbidden()
  }

  async index({
    request,
    auth,
    response
  }) {
    try {
      const user = await auth.getUser()
      if (user.is_status) {
        let access = await Accesses.query().where({
          id: user.access_id
        })

        return response.apiCollection({
          id: user.id,
          access_id: user.access_id,
          surname: user.surname,
          first_name: user.first_name,
          middle_name: user.middle_name,
          phone: user.phone,
          email: user.email,
          description: user.description,
          max_groups: user.max_groups,
          is_status: user.is_status,
          access: {
            title: access[0].title,
            description: access[0].description
          }
        })
      } else {
        await auth.logout()
        return response.apiForbidden()
      }
    } catch (error) {
      return response.apiForbidden()
    }

  }

  async logout({
    response,
    auth
  }) {
    try {
      if (await auth.check())
        return response.apiSuccess(await auth.logout())
    } catch (error) {
      return response.apiForbidden()
    }
  }
}

module.exports = UserController

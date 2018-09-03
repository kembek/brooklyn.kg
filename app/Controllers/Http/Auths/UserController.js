'use strict'

const Hash = use('Hash')
const User = use('AUTHS/User')
const Accesses = use('AUTHS/Accesses')

class UserController {
  async login({ request, auth, response }) {
    const { email, password } = request.all()

    try {
      console.log(typeof password)
      const user = await auth.attempt(email, password)

      if (user.is_status) {
        return response.apiSuccess(user)
      }
    } catch (error) {
      User.exceptions(error.message, error.status, error.code)
    }

    return response.apiForbidden()
  }

  async index({ request, auth, response }) {
    try {
      const user = await auth.getUser()
      if (user.is_status) {
        let group = await Group.query().where({
          id: user.group_id
        })

        return response.apiCollection({
          id: user.id,
          group_id: user.group_id,
          username: user.username,
          email: user.email,
          is_status: user.is_status,
          group: group[0].title
        })
      } else {
        await auth.logout()
      }
    } catch (error) { }

    return response.apiError({
      status: 403,
      message: 'У вас нет разрешения на доступ'
    })
  }

  async logout({ response, auth }) {
    try {
      if (await auth.check())
        return response.apiSuccess(await auth.logout())
    } catch (error) {
      return response.apiError()
    }
  }
}

module.exports = UserController

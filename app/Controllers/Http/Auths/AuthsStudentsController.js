'use strict'

const User = use('Auths/Students')

class AuthsStudentsController {
  async login({
    request,
    auth,
    response
  }) {
    const {
      phone,
      password
    } = request.only(['phone', 'password'])
    const jwt = auth.authenticator('jwt')

    try {
      const user = await jwt.getUser()
      if (user.is_status) {
        return response.apiSuccess(user)
      }
    } catch (error) {
      try {
        const user = await jwt.attempt(phone, password)

        if (user.is_status) {
          return response.apiSuccess(user)
        }

      } catch (error) {
        User.exceptions(error.message, error.status, error.code)
        return response.apiForbidden()
      }
    }

    return response.apiForbidden()
  }

  async index({
    request,
    auth,
    response
  }) {
    const jwt = auth.authenticator('jwt')

    try {
      const user = await jwt.getUser()
      if (user.is_status) {
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
          is_status: user.is_status
        })
      } else {
        await jwt.logout()
        return response.apiForbidden()
      }
    } catch (error) {
      User.exceptions(error.message, error.status, error.code)
      return response.apiForbidden()
    }

  }

  async logout({
    response,
    auth
  }) {
    const jwt = auth.authenticator('jwt')
    try {
      if (await jwt.check())
        return response.apiSuccess(await jwt.logout())
    } catch (error) {
      User.exceptions(error.message, error.status, error.code)
      return response.apiForbidden()
    }
  }
}

module.exports = AuthsStudentsController

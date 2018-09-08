'use strict'

const BasicSecond = use('Models/BasicSecond')
class User extends BasicSecond {
  static boot() {
    super.boot()
    this.addHook('beforeSave', 'User.hashPassword')
  }

  static get hidden() {
    return ['password']
  }

  tokens() {
    return this.hasMany('Auths/Token')
  }
}

module.exports = User

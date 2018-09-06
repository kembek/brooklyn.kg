'use strict'

const BasicSecond = use('MODELS/BasicSecond')
class User extends BasicSecond {
  static boot() {
    super.boot()
    this.addHook('beforeSave', 'User.hashPassword')
  }

  static get hidden() {
    return ['password']
  }
  
  users() {
    return this.hasOne('AUTHS/Accesses', 'access_id', 'id')
  }

  tokens() {
    return this.hasMany('AUTHS/Token')
  }
}

module.exports = User

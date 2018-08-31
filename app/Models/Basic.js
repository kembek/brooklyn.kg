'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')

class Basic extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'Basic.link')
    this.addHook('beforeUpdate', 'Basic.link')
    this.addHook('beforeDelete', 'Basic.setForeignZero')
    this.addHook('afterDelete', 'Basic.setForeignOne')
  }

  exceptions(message, status, code) {
    if (Env.NODE_ENV != 'production') {
      throw new Exceptions(message, status, code)
    }
  }
}

module.exports = Basic

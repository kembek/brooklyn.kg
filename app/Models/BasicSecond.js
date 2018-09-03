'use strict'

const Model = use('Model')
const Exceptions = use('App/Exceptions/BasicException')
const Env = use('Env')

class BasicSecond extends Model {

  static exceptions(message, status, code) {
    if (Env.NODE_ENV !== 'production') {
      throw new Exceptions(message, status, code)
    }
  }
}

module.exports = BasicSecond
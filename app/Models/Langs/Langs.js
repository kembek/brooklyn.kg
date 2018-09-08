'use strict'

const BasicSecond = use('Models/BasicSecond')
class Langs extends BasicSecond {

  langs() {
    return this.hasMany('Langs/Translates')
  }

  texts() {
    return this.hasMany('Langs/Translates', 'lang_id_text', 'id')
  }

  translates() {
    return this.hasMany('Langs/Translates', 'lang_id_translate', 'id')
  }

}

module.exports = Langs

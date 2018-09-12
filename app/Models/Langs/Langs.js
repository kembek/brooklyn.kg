'use strict'

const BasicSecond = use('Models/BasicSecond')
class Langs extends BasicSecond {

  langs() {
    return this.hasMany('Langs/Translates')
  }

  texts() {
    return this.hasMany('Langs/Translates', 'id', 'lang_id_text')
  }

  translates() {
    return this.hasMany('Langs/Translates', 'id', 'lang_id_translate')
  }

}

module.exports = Langs

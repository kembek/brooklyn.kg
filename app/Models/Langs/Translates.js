'use strict'

const BasicSecond = use('Models/BasicSecond')
class Translates extends BasicSecond {
  static get createdAtColumn() {
    return undefined
  }

  static get updatedAtColumn() {
    return undefined
  }

  langs() {
    return this.belongsTo('Langs/Langs')
  }

  text() {
    return this.belongsTo('Langs/Langs', 'lang_id_text', 'id')
  }

  translate() {
    return this.belongsTo('Langs/Langs', 'lang_id_translate', 'id')
  }

}

module.exports = Translates

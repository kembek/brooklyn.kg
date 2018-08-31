'use strict'

const Schema = use('Schema')

class TranslatesSchema extends Schema {
  up () {
    this.create('translates', (table) => {
      // table.unique(['lang_text', 'lang_translate'])
      table.increments()
      table.string('title', 255).notNullable()
      table.integer('lang_id_text').notNullable().unsigned()
      table.integer('lang_id_translate').notNullable().unsigned()
    })
  }

  down () {
    this.drop('translates')
  }
}

module.exports = TranslatesSchema

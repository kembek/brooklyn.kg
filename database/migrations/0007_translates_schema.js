'use strict'

const Schema = use('Schema')

class TranslatesSchema extends Schema {
  up () {
    this.create('translates', (table) => {
      table.unique(['lang_id_text', 'lang_id_translate'])
      table.increments()
      table.string('title', 255).notNullable().unique()
      table.integer('lang_id_text').notNullable().unsigned().references('id').inTable('langs').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('lang_id_translate').notNullable().unsigned().references('id').inTable('langs').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('translates')
  }
}

module.exports = TranslatesSchema

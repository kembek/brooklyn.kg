'use strict'

const Schema = use('Schema')

class LangsSchema extends Schema {
  up() {
    this.create('langs', (table) => {
      table.unique(['image', 'code'])
      table.increments()
      table.string('image').defaultTo(null)
      table.string('title', 80).notNullable().unique()
      table.string('code', 10).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('langs')
  }
}

module.exports = LangsSchema

'use strict'

const Schema = use('Schema')

class LangsSchema extends Schema {
  up() {
    this.create('langs', (table) => {
      table.increments()
      table.string('title', 50).notNullable().unique()
      table.string('code', 10).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('langs')
  }
}

module.exports = LangsSchema

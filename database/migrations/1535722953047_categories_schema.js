'use strict'

const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.text('description', 'longtext')
      table.integer('parent_id', 10).unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema

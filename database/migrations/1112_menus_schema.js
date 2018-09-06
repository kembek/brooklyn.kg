'use strict'

const Schema = use('Schema')

class MenusSchema extends Schema {
  up () {
    this.create('menus', (table) => {
      table.increments()
      table.integer('parent_id', 10).unsigned().references('id').inTable('menus')
      table.string('title', 255).notNullable().unique()
      table.string('link', 255).notNullable()
      table.string('image', 255)
      table.integer('lang_id').notNullable().unsigned().references('id').inTable('langs')
      table.integer('sort').notNullable().unsigned().defaultTo(0)
      table.boolean('is_local').defaultTo(true)
      table.boolean('is_status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('menus')
  }
}

module.exports = MenusSchema

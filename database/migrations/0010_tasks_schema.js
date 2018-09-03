'use strict'

const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.text('description', 'longtext')
      table.integer('category_id', 10).unsigned().references('id').inTable('categories')
      table.text('text', 'longtext').notNullable()
      table.text('translate', 'longtext').notNullable()
      table.integer('translate_id', 10).notNullable().unsigned().references('id').inTable('translates')
      table.boolean('is_status').notNullable().defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema

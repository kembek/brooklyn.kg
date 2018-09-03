'use strict'

const Schema = use('Schema')

class GroupsSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.string('title', 80).notNullable()
      table.string('description', 255)
      table.integer('user_id', 10).unsigned().references('id').inTable('users')
      table.integer('max_students').notNullable().defaultTo(6).unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupsSchema

'use strict'

const Schema = use('Schema')

class GroupsStudentsSchema extends Schema {
  up () {
    this.create('groups_students', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.string('description', 255)
      table.integer('user_id', 10).unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('max_students').notNullable().defaultTo(6).unsigned()
      table.integer('translate_id', 10).notNullable().unsigned().references('id').inTable('translates').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('groups_students')
  }
}

module.exports = GroupsStudentsSchema

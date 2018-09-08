'use strict'

const Schema = use('Schema')

class UsersTypesStudentsSchema extends Schema {
  up () {
    this.create('users_types_students', (table) => {
      table.increments()
      table.unique(['user_id', 'type_id'])
      table.integer('user_id', 10).notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('type_id', 10).notNullable().unsigned().references('id').inTable('types_students').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('users_types_students')
  }
}

module.exports = UsersTypesStudentsSchema

'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 80).unique()
      table.string('phone', 20).notNullable().unique()
      table.integer('access_id', 10).notNullable().unsigned().references('id').inTable('accesses').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('password', 60).notNullable()
      table.string('image').unique().defaultTo(null)
      table.string('surname', 60)
      table.string('first_name', 60)
      table.string('middle_name', 60)
      table.string('description', 255)
      table.integer('max_groups', 10).defaultTo(1)
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UsersSchema

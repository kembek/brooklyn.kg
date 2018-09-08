'use strict'

const Schema = use('Schema')

class GroupsUsersSchema extends Schema {
  up () {
    this.create('groups_users', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.string('description', 255)
      table.integer('user_id', 10).unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('groups_users')
  }
}

module.exports = GroupsUsersSchema

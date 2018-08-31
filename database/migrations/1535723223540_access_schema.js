'use strict'

const Schema = use('Schema')

class AccessSchema extends Schema {
  up() {
    this.create('accesses', (table) => {
      table.increments()
      table.string('title', 40).notNullable().unique()
      table.string('description', 255)
      // access tables
      // 0000 - none; 1000 - read; 0100 - edite; 0010 - create; 0001 - delete; 1111 - all
      table.string('users', 4).notNullable().defaultTo('0000')
      table.string('students', 4).notNullable().defaultTo('0000')
      table.string('tasks', 4).notNullable().defaultTo('0000')
      table.string('categories', 4).notNullable().defaultTo('0000')
      table.string('translates', 4).notNullable().defaultTo('0000')
      table.string('langs', 4).notNullable().defaultTo('0000')
      table.string('access', 4).notNullable().defaultTo('0000')
      table.string('groups', 4).notNullable().defaultTo('0000')
      table.timestamps()
    })
  }

  down() {
    // this.alter('accesses', (table) => {
    //   table.dropForeign('access')
    // })

    this.drop('accesses')
  }
}

module.exports = AccessSchema

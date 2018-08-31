'use strict'

const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('phone', 20).notNullable().unique()
      table.string('surname', 60).notNullable()
      table.string('first_name', 60).notNullable()
      table.string('middle_name', 60).notNullable()
      table.integer('points', 255).defaultTo(0)
      table.integer('group_id', 10).unsigned()
      table.boolean('is_status').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema

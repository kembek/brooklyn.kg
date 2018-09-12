'use strict'

const Schema = use('Schema')

class TokensStudentsSchema extends Schema {
  up () {
    this.create('tokens_students', table => {
      table.increments()
      table.integer('students_id').unsigned().references('id').inTable('students').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('token', 255).notNullable().unique()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens_students')
  }
}

module.exports = TokensStudentsSchema

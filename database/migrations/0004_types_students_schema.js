'use strict'

const Schema = use('Schema')

class TypesStudentsSchema extends Schema {
  up () {
    this.create('types_students', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.string('description', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('types_students')
  }
}

module.exports = TypesStudentsSchema

'use strict'

const Schema = use('Schema')

class AlterSchema extends Schema {
  up() {

    this.alter('users', (table) => {
      table.foreign('access_id')
        .references('id')
        .inTable('accesses')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('groups', (table) => {
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('tasks', (table) => {
      table.foreign('category_id')
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('tasks', (table) => {
      table.foreign('translate_id')
        .references('id')
        .inTable('translates')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('groups', (table) => {
      table.foreign('translate_id')
        .references('id')
        .inTable('translates')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('categories', (table) => {
      table.foreign('parent_id')
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('students', (table) => {
      table.foreign('group_id')
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    this.alter('translates', (table) => {
      table.foreign('lang_id_text')
        .references('id')
        .inTable('langs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.foreign('lang_id_translate')
        .references('id')
        .inTable('langs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  down() {

  }
}

module.exports = AlterSchema

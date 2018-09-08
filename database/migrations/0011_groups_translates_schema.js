'use strict'

const Schema = use('Schema')

class GroupsTranslatesSchema extends Schema {
  up () {
    this.create('groups_translates', (table) => {
      table.unique(['group_id', 'translate_id'])
      table.increments()
      table.integer('group_id', 10).notNullable().unsigned().references('id').inTable('groups_students').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('translate_id', 10).notNullable().unsigned().references('id').inTable('translates').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('groups_translates')
  }
}

module.exports = GroupsTranslatesSchema

'use strict'

const Schema = use('Schema')

class GroupsTranslatesSchema extends Schema {
  up () {
    this.create('groups_translates', (table) => {
      table.unique(['group_id', 'translate_id'])
      table.integer('group_id', 10).notNullable().unsigned().references('id').inTable('groups')
      table.integer('translate_id', 10).notNullable().unsigned().references('id').inTable('translates')
    })
  }

  down () {
    this.drop('groups_translates')
  }
}

module.exports = GroupsTranslatesSchema

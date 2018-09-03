'use strict'

const Schema = use('Schema')

class PagesSchema extends Schema {
  up () {
    this.create('pages', (table) => {
      table.increments()
      table.string('image').unique()
      table.string('title').notNullable().unique('ui_posts_title')
      table.string('link').notNullable().unique('ui_posts_link')
      table.text('description', 'longtext')
      table.integer('lang_id').notNullable().unsigned().references('id').inTable('langs')
      table.boolean('is_status').notNullable().defaultTo(false)
      table.string('meta_keywords')
      table.string('meta_description')
      table.timestamps()
    })
  }

  down () {
    this.drop('pages')
  }
}

module.exports = PagesSchema

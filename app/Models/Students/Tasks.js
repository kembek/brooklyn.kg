'use strict'

const BasicSecond = use('Models/BasicSecond')


class Tasks extends BasicSecond {
    static get table() {
        return 'tasks'
    }

    categories() {
      return this.hasMany('Students/Categories', 'category_id', 'id')
    }

    translates() {
      return this.hasOne('Langs/Translates', 'translate_id', 'id')
    }

}


module.exports = Tasks

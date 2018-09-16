'use strict'

const BasicSecond = use('Models/BasicSecond')


class Pages extends BasicSecond {
    static get table() {
        return 'pages'
    }

    lang() {
        return this.hasMany('Langs/Translates', 'lang_id', 'id')
    }

}


module.exports = Pages

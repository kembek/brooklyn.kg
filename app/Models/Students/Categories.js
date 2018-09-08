'use strict'

const BasicSecond = use('Models/BasicSecond')


class Categories extends BasicSecond {
    static get table() {
        return 'categories'
    }

}


module.exports = Categories

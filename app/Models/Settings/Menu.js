'use strict'

const BasicSecond = use('Models/BasicSecond')


class Menu extends BasicSecond {
    static get table() {
        return 'menus'
    }

    parent() {
        return this.belongsTo('Settings/Menu', 'parent_id', 'id')
    }

}


module.exports = Menu

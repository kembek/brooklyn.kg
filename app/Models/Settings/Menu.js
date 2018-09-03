'use strict'

const BasicSecond = use('MODELS/BasicSecond')


class Menu extends BasicSecond {
    static get table() {
        return 'menus'
    }

    parent() {
        return this.belongsTo('SETTINGS/Menu', 'parent_id', 'id')
    }

}


module.exports = Menu

'use strict'

const BasicSecond = use('Models/BasicSecond')


class Accesses extends BasicSecond {
    static get table() {
        return 'accesses'
    }

    users() {
        return this.hasMany('Auths/User', 'id', 'access_id')
    }

}


module.exports = Accesses

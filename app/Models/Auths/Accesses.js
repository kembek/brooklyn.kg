'use strict'

const BasicSecond = use('MODELS/BasicSecond')


class Accesses extends BasicSecond {
    static get table() {
        return 'accesses'
    }

    users() {
        return this.hasMany('AUTHS/User', 'id', 'access_id')
    }

}


module.exports = Accesses

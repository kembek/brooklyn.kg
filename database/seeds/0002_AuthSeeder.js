'use strict'

const Accesses = use('Auths/Accesses')
const User = use('Auths/User')

class LangsSeeder {
  async run() {
    await Accesses.create({
      id: 1,
      title: 'Администратор',
      users: '1111',
      students: '1111',
      tasks: '1111',
      categories: '1111',
      langs: '1111',
      translates: '1111',
      accesses: '1111',
      groups_students: '1111'
    })

    await User.create({
      id: 1,
      access_id: 1,
      phone: "996703906706",
      password: "1234",
      first_name: "Даниэль"
    })

    console.log('Auth seeds done!')
  }
}

module.exports = LangsSeeder

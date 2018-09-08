'use strict'

// const Factory = use('Factory')
// const Database = use('Database')
const Accesses = use('Auths/Accesses')
const User = use('Auths/User')

class LangsSeeder {
  async run() {
    // await Database.truncate('langs')
    // Group
    // const langs = await Factory.model('Langs/Langs').createMany([{
    await Langs.createMany([{
      id: 1,
      title: 'Русский',
      code: 'ru'
    }, {
      id: 2,
      title: 'English',
      code: 'en'
    }])

    await Translates.createMany( [ {
      title: "Русско-английский перевод",
      lang_id_text: 1,
      lang_id_translate: 2
    }, {
      title: "Англо-русский перевод",
      lang_id_text: 2,
      lang_id_translate: 1
    }] )

    console.log('Lang seeds done!')
  }
}

module.exports = LangsSeeder

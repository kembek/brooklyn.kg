'use strict'

const Langs = use('Langs/Langs')
class LangController {
  async localization({
    response
  }) {
    try {
      const Langs = await Langs.query().with('text').with('translate').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      return response.apiForbidden()
    }
  }
  async all({
    response
  }) {
    try {
      const Langs = await Langs.query().with('text').with('translate').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      return response.apiForbidden()
    }
  }
}


module.exports = LangController

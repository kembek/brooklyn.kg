'use strict'

const Translates = use('Langs/Translates')

class TranslateController {

  async all({
    response
  }) {
    try {
      const translates = await Translates.query().with('text').with('translate').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      return response.apiForbidden()
    }
  }
}

module.exports = TranslateController

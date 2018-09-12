'use strict'

const Translates = use('Langs/Translates')

class TranslatesController {

  async all({
    response
  }) {
    try {
      const translates = await Translates.query().with('text').with('translate').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      Translates.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }
}

module.exports = TranslatesController

'use strict'

const Langs = use('Langs/Langs')
class LangsController {
  async localization({
    response
  }) {
    try {
      const langs = await Langs.query().with('texts').with('translates').fetch()
      return response.apiSuccess(langs)
    } catch (error) {
      Langs.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }
  async create({
    request,
    response
  }) {
    const data = request.only(["title", "code"])

    try {
      const lang = await Langs.create(data)
      return response.apiSuccess(lang)
    } catch (error) {
      Langs.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }

  async update({
    request,
    response,
    params
  }) {
    const data = request.only(["title", "code"])

    try {
      const lang = await Langs.findOrFail(params.id)
      lang.merge(data)
      await lang.save()
      return response.apiSuccess(lang)
    } catch (error) {
      Langs.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }

  async all({
    response
  }) {
    try {
      const langs = await Langs.query().with('texts').with('translates').fetch()
      return response.apiSuccess(langs)
    } catch (error) {
      Langs.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }
}


module.exports = LangsController

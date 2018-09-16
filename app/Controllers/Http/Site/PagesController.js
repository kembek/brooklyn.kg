'use strict'

const Pages = use('Site/Pages')

class PagesController {

  async create({
    request,
    response
  }) {
    const data = request.only(["image", "title", "link", "description", "page_id", "is_status", "meta_keywords", "meta_description"])

    try {
      const page = await Pages.create(data)
      return response.apiCreated(page)
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
    const data = request.only(["image", "title", "link", "description", "page_id", "is_status", "meta_keywords", "meta_description"])

    try {
      const page = await Pages.findOrFail(params.id)
      page.merge(data)
      await page.save()
      return response.apiUpdated(page)
    } catch (error) {
      Langs.exceptions(error.message, error.status, error.code)
      return response.apiError();
    }
  }

}

module.exports = PagesController

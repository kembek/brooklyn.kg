'use strict'

const Tasks = use('Students/Tasks')
class TaskController {

  async index({
    response
  }) {
    try {
      const translates = await Tasks.query().where({
        is_status: true
      }).with('categories').with('translates').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      return response.apiError()
    }  }

  async all({
    response
  }) {
    try {
      const translates = await Tasks.query().with('categories').with('translates').fetch()
      return response.apiSuccess(translates)
    } catch (error) {
      Tasks.exceptions(error.message, error.status, error.code)
      return response.apiError()
    }
  }

  async create({
    request,
    response
  }) {
    try {
      const data = request.only(['title', 'description', 'category_id', 'text', 'translate', 'translate_id', 'is_status'])
      const translates = await Tasks.create(data) //.query().with('text').with('translate').fetch()
      return response.apiCreated(translates)
    } catch (error) {
      Tasks.exceptions(error.message, error.status, error.code)
      return response.apiError()
    }
  }

  async update({
    request,
    response,
    params
  }) {
    try {
      const data = request.only(['title', 'description', 'category_id', 'text', 'translate', 'translate_id', 'is_status'])
      const tasks = await Tasks.findOrFail(params.id)
      tasks.merge(data)
      await tasks.save()
      return response.apiUpdated(tasks)
    } catch (error) {
      Tasks.exceptions(error.message, error.status, error.code)
      return response.apiError()
    }
  }
  async destroy({
    response,
    params
  }) {
    try {
      const tasks = await Tasks.findOrFail(params.id)

      await tasks.delete()
      return response.apiDeleted()
    } catch (error) {
      Tasks.exceptions(error.message, error.status, error.code)
      return response.apiError()
    }
  }

}

module.exports = TaskController

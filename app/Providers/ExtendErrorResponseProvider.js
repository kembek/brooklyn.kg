'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ExtendErrorResponseProvider extends ServiceProvider {
  async boot() {
    const Response = use('Adonis/Src/Response')

    Response.macro('apiForbidden', function (message) {
      this.status(403).json({
        status: 403,
        type: 'error',
        message: message || 'Нет доступа'
      })
    })

    Response.macro('apiError', function (message) {
      this.status(404).json({
        status: 404,
        type: 'error',
        message: message || 'Произошла ошибка'
      })
    })

    Response.macro('apiNotFound', function (meta) {
      this.status(404).json({
        status: 404,
        message: 'Не найдено!!!',
        meta: meta
      })
    })
  }
}

module.exports = ExtendErrorResponseProvider
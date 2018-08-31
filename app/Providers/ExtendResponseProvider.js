'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ExtendResponseProvider extends ServiceProvider {

  boot() {
    const Response = use('Adonis/Src/Response')

    Response.macro('apiSuccess', function (data, meta, message) {
      this.status(200).json({
        status: 200,
        type: 'success',
        message: message || 'Успешно',
        data: data,
        meta: meta
      })
    })

    Response.macro('apiCreated', function (item, meta) {
      this.status(201).json({
        status: 201,
        type: 'success',
        message: 'Успешно созданно',
        data: item,
        meta: meta
      })
    })

    Response.macro('apiUpdated', function (item, meta) {
      this.status(202).json({
        status: 202,
        message: 'Успешно обновленно',
        data: item,
        meta: meta
      })
    })

    Response.macro('apiDeleted', function (data) {
      this.status(202).json({
        status: 202,
        message: 'Успешно удалено',
        data: data
      })
    })

    Response.macro('apiEmpty', function () {
      this.status(204).json({
        status: 204,
        message: 'Нет содержимого!'
      })
    })

    Response.macro('apiCollection', function (items, meta) {
      if (items.hasOwnProperty('row')) {
        if (!items.rows.length) return this.status(204)
          .json({
            status: 204,
            message: 'Нет содержимого!'
          })

      }

      if (items.hasOwnProperty('length')) {
        if (!items.length) return this.status(204)
          .json({
            status: 204,
            message: 'Нет содержимого!'
          })
      }

      this.status(200).json({
        status: 200,
        message: 'Успешно получено',
        data: items,
        meta: meta
      })
    })

    Response.macro('apiPaginate', function (items) {
      if (items.hasOwnProperty('row')) {
        if (!items.rows.length) return this.status(204)
          .json({
            status: 204,
            message: 'Нет содержимого!'
          })

      }

      if (items.hasOwnProperty('length')) {
        if (!items.length) return this.status(204)
          .json({
            status: 204,
            message: 'Нет содержимого!'
          })
      }
      this.status(200).json(items)
    })


  }

}

module.exports = ExtendResponseProvider

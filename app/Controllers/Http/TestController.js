'use strict'

class TestController {

  async hello({
    request,
    response
  }) {
    const name = request.input('name', 'guest')
    response.send({
      message: 'Hello ' + name
    })
  }

}

module.exports = TestController

'use strict'

class TestController {

  /**
  * @swagger
  * /hello:
  *   get:
  *     tags:
  *       - Test
  *     summary: Sample API
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */

 async hello({ request, response }) {
  const name = request.input('name', 'Guess')
  response.send({ message: 'Hello ' + name })
}
}

module.exports = TestController

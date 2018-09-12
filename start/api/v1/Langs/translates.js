'use strict'

const Route = use('Route')

Route.group(() => {

  Route.get('/all/', 'Langs/TranslatesController.all')

}).prefix('/api/v1/translates')

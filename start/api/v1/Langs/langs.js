'use strict'

const Route = use('Route')

Route.group(() => {

  Route.get('/all/', 'Langs/TranslateController.all')

}).prefix('/api/v1/translates')

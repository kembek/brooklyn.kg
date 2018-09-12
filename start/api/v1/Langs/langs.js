'use strict'

const Route = use('Route')

Route.group(() => {

  Route.post('/', 'Langs/LangsController.create')
  Route.get('/all/', 'Langs/LangsController.all')

}).prefix('/api/v1/langs')

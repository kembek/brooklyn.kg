'use strict'

const Route = use('Route')

Route.group(() => {

  Route.post('/', 'Auths/AuthsController.login')
  Route.get('/', 'Auths/AuthsController.index')
  Route.delete('/', 'Auths/AuthsController.logout')

}).prefix('/api/v1/auth')

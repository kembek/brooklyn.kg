'use strict'

const Route = use('Route')

Route.group(() => {

  Route.post('/', 'Auths/AuthsController.login')
  Route.get('/', 'Auths/AuthsController.index')
  Route.delete('/', 'Auths/AuthsController.logout')

}).prefix('/api/v1/auth')

Route.group(() => {

  Route.post('/', 'Auths/AuthsStudentsController.login')
  Route.get('/', 'Auths/AuthsStudentsController.index')
  Route.delete('/', 'Auths/AuthsStudentsController.logout')

}).prefix('/api/v1/auth/students')

'use strict'

const Route = use('Route')

Route.group(() => {

  Route.get('/all/', 'Students/TasksController.all')
  Route.get('', 'Students/TasksController.index')
  Route.post('', 'Students/TasksController.create')
  Route.put('/:id', 'Students/TasksController.update')
  Route.delete('/:id', 'Students/TasksController.destroy')

}).prefix('/api/v1/tasks')

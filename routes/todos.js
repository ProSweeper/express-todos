var express = require('express');
var router = express.Router();
// get the todos controller
var todosCtrl = require('../controllers/todos')

// All actual paths start with '/todos'
// GET /todos
router.get('/', todosCtrl.index);
// GET /todos/new <-- define before show route
router.get('/new', todosCtrl.new);
// POST /todos
router.post('/', todosCtrl.create)
// GET /todos/:id
router.get('/:id', todosCtrl.show);
// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);
// DELETE /todos/:id
router.delete('/:id', todosCtrl.delete);
// PUT /todos/:id
router.put('/:id', todosCtrl.update);
module.exports = router;

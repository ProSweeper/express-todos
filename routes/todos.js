var express = require('express');
var router = express.Router();
// get the todos controller
var todosCtrl = require('../controllers/todos')

// All actual paths start with '/todos'
// GET /todos
router.get('/', todosCtrl.index);
// GET /todos/new <-- define before show route
router.get('/new', todosCtrl.new);
// GET /todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;

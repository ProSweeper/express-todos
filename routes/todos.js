var express = require('express');
var router = express.Router();
// get the todos controller
var todosCtrl = require('../controllers/todos')

// All actual paths start with '/todos'
// GET request to /todos
router.get('/', todosCtrl.index);

router.get('/:id', todosCtrl.show);

module.exports = router;

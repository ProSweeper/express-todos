const Todo = require('../models/todo');

module.exports = {
    index,
    show,
}

function index(req, res) {
    // the second arg in render() is essentially merging res.locals with the object we pass in
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos',
    });
}

function show(req, res) {
    res.render('todos/show', {
        // the request has params and we can grab the id from there
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details',
    });
}

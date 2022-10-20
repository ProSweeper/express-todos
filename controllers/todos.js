const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
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

function newTodo(req, res) {
    res.render('todos/new', { title: 'New Todo' });
}

// function newTodo(req, res) {
//     res.render('todos/new', { title: 'New Todo' });
// }

function create(req, res) {
    // Models are responsible for CRUD'ing the data
    // the req.body will have the info from the form that is being submitted
    Todo.create(req.body);
    // always do a redirect when data has been changed
    res.redirect('/todos') // tells browser to make a new GET request to the /todos page
}
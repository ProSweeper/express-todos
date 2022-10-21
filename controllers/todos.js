const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
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

function deleteTodo(req, res) {
    // the req.params.id correlates to the route param in the routes
    // module - router.delete('/:id', todosCtrl.delete)
    Todo.deleteOne(req.params.id);
    // we changed data so we need to do a redirect
    res.redirect('/todos');
}

function edit(req, res) {
    // the request has params and we can grab the id from there
    const todo = Todo.getOne(req.params.id);
    res.render("todos/edit", {
        // need our title due to our partials
        title: 'Edit To-Do',
        todo, // shorthand naming
    });
}

function update(req, res) {
    req.body.done = !!req.body.done;
    // again we tap into the id param from the url
    // the req.body is from the forms value attribute on the edit view template
    // and gets put into the request body
    Todo.update(req.params.id, req.body);
    // since we changed data we redirect
    // by using a template literal we can grab the id from above and 
    // redirect the user to the show template with the id 
    res.redirect(`/todos/${req.params.id}`);
}
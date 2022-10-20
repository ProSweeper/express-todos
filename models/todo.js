const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
};

// we want the param because the controller create function has a 
// function in it that needs the request body
function create(todo) {
    // add the id
    // to make a new ID we can use Date.now % 1,000,000 
    // this gives us the ms since jan 1 1970 and to get it 
    // to 6 digits we use the modulo operator
    todo.id = Date.now() % 1000000;
    // false since we wouldnt create a finished todo
    todo.done = false;
    // push to the end of the todos array
    todos.push(todo);
}

function getAll() {
    return todos;
}
function getOne(id) {
    // we need to convert the id into a number
    id = parseInt(id);
    // search for the todo where the id is equal to the 
    // id that gets passed into the function
    return todos.find(todo => todo.id === id);
}
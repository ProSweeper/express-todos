const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
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

function deleteOne(id) {
    // we need to convert id to a number since it is a number in the objects
    id = parseInt(id);
    // since we defined our array as a const we cannot redefine the array
    // we need to edit/update it in place
    // we can use the splice method to remove an element from the array
    // we just need to get a hold of the index 
    const idx = todos.findIndex(todo => todo.id === id);
    // now that we have the index we can splice the array
    // first arg is the index we want to start at
    // second arg is the amount of items we want to delete
    todos.splice(idx, 1);
}

function update(id, updatedTodo) {
    // we need to convert the id into a number
    id = parseInt(id);
    // search for the todo where the id is equal to the 
    // id that gets passed into the function and cache it
    const todo = todos.find(todo => todo.id === id);
    // the best practice when updating a resource is to merge the 
    // updated object with the old object 
    // we can do this with a static method Object.assign()
    Object.assign(todo, updatedTodo);
    // we are not reassigning todo, thats why we can still use const
}
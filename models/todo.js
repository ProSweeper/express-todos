const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];

module.exports = {
    getAll,
    getOne,
};

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
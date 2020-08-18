const ToDoModel = require('../model/todo.model');

exports.createToDo = () => {
    ToDoModel.create();
};


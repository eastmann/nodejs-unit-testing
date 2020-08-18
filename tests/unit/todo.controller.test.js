const ToDoController = require('../../controllers/todo.controller');
const ToDoModel = require('../../model/todo.model');

ToDoModel.create = jest.fn();

describe('ToDoController.createToDo', () => {
    it('Should have a createToDo function', () => {
        expect(typeof ToDoController.createToDo).toBe('function');
    });
    it('Should call ToDoModel.create', () => {
        ToDoController.createToDo();
        expect(ToDoModel.create).toBeCalled();
    });
});


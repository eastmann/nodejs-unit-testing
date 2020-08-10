const ToDoController = require('../../controllers/todo.controller');

describe('ToDoController.createToDo', () => {
    it('Should have a createToDo function', () => {
        expect(typeof ToDoController.createToDo).toBe('function');
    });
});


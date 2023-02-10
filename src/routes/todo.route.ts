const router = require('express').Router();
const controller = require('../controller/todo.controller');

router.get('/todo/all', controller.getAllTodo);
router.post('/todo/add', controller.addTodo);
router.get('/todo/:id', controller.getTodoById);
router.put('/todo/:id', controller.updateTodo);
router.delete('/todo/:id', controller.deleteTodo);

module.exports = router;
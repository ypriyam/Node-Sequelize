const mainRouter = require('express').Router();
const todoRouter = require('./todo.route');

mainRouter.use('/api', todoRouter);

module.exports = mainRouter;
import { Request, Response } from "express";
const db = require('../models/index.model');

const ToDo = db.todo;

const addTodo = async (request: Request, response: Response) => {
    try {
        const { text, status } = request.body;
        const saveTodo = await ToDo.create({ text, status });
        return response.status(200).json({ message: "todo added!", data: saveTodo });
    } catch (error) {
        const err = new Error('Failed to add message');
        return response.status(500).json({ message: err, error: error });
    }
}

const getAllTodo = async (request: Request, response: Response) => {
    try {
        const data = await ToDo.findAll({});
        return response.status(200).json({ message: "all todo is here", data: data });
    } catch (error) {
        return response.status(500).json({ error });
    }
}

const getTodoById = async (request: Request, response: Response) => {
    try {
        const id = request.params.id;
        const todo = await ToDo.findOne({ where: { id: id } });
        return response.status(200).json({ message: `id number ${id} todo is here`, data: todo });
    } catch (error) {
        return response.status(500).json({ error });
    }
};

const updateTodo = async (request: Request, response: Response) => {
    try {
        const id = request.params.id;
        const updatedTodo = await ToDo.update({ ...request.body }, { where: { id: id } });
        return response.status(200).json({ message: 'todo update!', data: updatedTodo });
    } catch (error) {
        return response.status(500).json({ error });
    }
}

const deleteTodo = async (request: Request, response: Response) => {
    try {
        const id = request.params.id;
        const deletedTodo = await ToDo.destroy({ where: { id: id } });
        return response.status(200).json({ message: 'todo delete!', data: deletedTodo });
    } catch (error) {
        return response.status(500).json({ error });
    }
}

module.exports = { getAllTodo, addTodo, getTodoById, updateTodo, deleteTodo };
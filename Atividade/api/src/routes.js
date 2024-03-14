const express = require('express');
const routes = express.Router();

const apiResponse = (req, res) => {
    res.send('API Online');
};

const tasks = require('./controllers/tarefas');
const users = require('./controllers/usuarios');

routes.get('/', apiResponse);

routes.post('/tarefas', tasks.create);
routes.get('/tarefas', tasks.read);
routes.put('/tarefas/:id', tasks.update);
routes.delete('/tarefas/:id', tasks.del);
const express = require('express');
const routes = express.Router();

const apiResponse = (req, res) => {
    res.send('API Online');
};

const tasks = require('./controllers/tarefas');
const users = require('./controllers/usuarios');

routes.get('/', apiResponse);

routes.post('/tarefas', tarefas.create);
routes.get('/tarefas', tarefas.read);
routes.put('/tarefas/:id', tarefas.update);
routes.delete('/tarefas/:id', tarefas.del);

routes.post('/usuarios', usuarios.create);
routes.get('/usuarios', usuarios.read);
routes.put('/usuarios/:id', usuarios.update);
routes.delete('/usuarios/:id', usuarios.del);

module.exports = routes;


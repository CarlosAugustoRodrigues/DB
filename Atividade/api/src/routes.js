const express = require('express');
const routes = express.Router();

const apiResponse = (req, res) => {
    res.send('API Online');
};

const tarefas = require('./controllers/tarefas');
const usuarios = require('./controllers/usuarios');

routes.get('/', apiResponse);

routes.post('/tarefas', tarefas.create);
routes.get('/tarefas', tarefas.read);
routes.put('/tarefas/:id', tarefas.update);
routes.delete('/tarefas/:id', tarefas.del);

routes.post('/usuarios', usuarios.create);
routes.get('/usuarios', usuarios.read);
routes.put('/usuarios/:id', usuarios.update);
routes.delete('/usuarios/:id', usuarios.del);

routes.post('/login', usuarios.login);

module.exports = routes;
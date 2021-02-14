const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;


const tarefasController = require('./src/controllers/tarefas-controller');
const usuariosController = require('./src/controllers/usuarios-controller');
const bd = require('./src/infra/bd.js')


usuariosController(app, bd);
tarefasController(app, bd);

app.listen(port, () =>
{
    console.log(`Aplicação funcionando em http://localhost:${port}`)
});



const express = require('express');
const bodyParser = require('body-parser');

const port = 3030;
const app = express();
const bd = require('./infra/sqlite_db')
app.use(bodyParser.json());

const indexController = require('./controllers/index-controller.js');
indexController(app);

const usuariosController = require('./controllers/usuarios-controller.js')
usuariosController(app, bd);

const tarefasController = require('./controllers/tarefas-controller.js');
tarefasController(app, bd);

app.listen(port, ()=>
    {
        console.log(`Passando a visão em https://localhost:${port}`)
    }
)
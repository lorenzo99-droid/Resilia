const express = require('express')
const bodyParser = ('body-parser')
const tarefasController = require('./controllers/tarefas-controller')
const usuariosController = require('./controllers/usuarios-controller')

const app = express()

const port = 3001

usuariosController(app);
tarefasController(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Tarefa de aula 13-01: Sbstituir o GET pelo POST
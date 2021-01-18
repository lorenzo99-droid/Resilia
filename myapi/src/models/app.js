const express = require('express')
const app = express()
const port = 3001

// utilize nome da usuario como path



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Tarefa de aula 13-01: Sbstituir o GET pelo POST
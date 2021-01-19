app.get(`/tarefas`, (req, res) => {
    res.send(`Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados`)
})

app.post(`/tarefas`, (req, res) => {
    res.send(`Rota ativada com POST e recurso tarefa: valores de tarefa devem ser retornados`)
})
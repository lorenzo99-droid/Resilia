app.get(`/usuarios`, (req, res) => {
    res.send(`Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados`)
})

app.post(`/usuarios`, (req, res) => {
    res.send(`Rota ativada com POST e recurso usuario: valores de usuario devem ser retornados`)
})
module.exports = (app) =>
{
    app.get('/tarefas', (req, res) => 
    {
        res.send('<h1>Salve, TAREFAS</h1>');
    } );

    app.get('/tarefas:id', (req, res)=>
    {
        res.send('Achei a tarefa!!');
    });

    app.post('/tarefas', (req, res) =>
    {
        res.send('Tarefas inseridas com sucesso!!!')
    });

    app.delete('/tarefas:id', (req, res) =>
    {
        res.send('Tarefas deletada com sucesso!!!')
    });

    app.put('/tarefas:id', (req, res) =>
    {
        res.send('Tarefas atualizada com sucesso!!!')
    });
};


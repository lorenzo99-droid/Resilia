const TarefasDAO = require('../DAO/tarefas-DAO');

module.exports = (app, bd) =>
{
    const tarefasDAO = new TarefasDAO(bd);
    app.get('/tarefas', async (req, res) =>
    {
        try
        {
            const mostraTarefas = await tarefasDAO.todasTarefas()
            res.send(mostraTarefas);
        }catch
            {
                res.send(err);
            }
    });

    app.get('/tarefas/:id', async (req, res)=>
    {
        let parametro = req.params.id;
        try
        {
            const mostraTarefaId = await tarefasDAO.sendParamsTarefa(parametro)
            res.send(mostraTarefaId);
        }catch
            {
                res.send(err);
            }
    });

    app.post('/tarefas', async (req, res) =>
    {TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO
       let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.idUsuario]
       try
       {
           const inserindoTarefa = await tarefasDAO.inserindoTarefa(parametro)
           res.send(inserindoTarefa);
       }catch
        {
            res.send(err);
        }
    });

    app.delete('/tarefas/:id', async (req, res) => {
        let parametro = req.params.id;
        try {
            const deletandoTarefa = await tarefasDAO.deletandoTarefa(parametro)
            res.send(deletandoTarefa)
        }catch
        {
            res.send(err)
        }
    });

    app.put('/tarefas/:id', async (req, res) =>
    {
        let parametro = [req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.idUsuario]
        try{
            const atualizandoTarefa = await tarefasDAO.atualizandoTarefa(parametro)
            res.send(atualizandoTarefa)
        } catch {
                res.send(err)
            }
    });
};
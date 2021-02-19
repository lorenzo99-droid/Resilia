const UsuariosDAO = require('../DAO/usuarios-DAO');

module.exports = (app, bd) =>
{
    const usuariosDAO = new UsuariosDAO(bd);
    app.get('/usuarios', async (req, res) =>
    {
        try
        {
            const mostraUsuarios = await usuariosDAO.todosUsuarios()
            res.send(mostraUsuarios);
        }catch
            {
                res.send(err);
            }
    });

    app.get('/usuarios/:id', async (req, res)=>
    {
        let parametro = req.params.id;
        try
        {
            const mostraUsuarioUnico = await usuariosDAO.sendParamsUsuario(parametro)
            res.send(mostraUsuarioUnico);
        }catch
            {
                res.send(err);
            }
    });

    app.post('/usuarios', async (req, res) =>
    {
       let parametro = [req.body.nome, req.body.email, req.body.senha]
       try
       {
           const inserindoUsuario = await usuariosDAO.inserindoUsuario(parametro)
           res.send(inserindoUsuario);
       }catch
        {
            res.send(err);
        }
    });

    app.delete('/usuarios/:id', async (req, res) => {
        let parametro = req.params.id;
        try {
            const deletaUsuario = await usuariosDAO.deletandoUsuario(parametro)
            res.send(deletaUsuario)
        }catch
        {
            res.send(err)
        }
    });

    app.put('/usuarios/:id', async (req, res) =>
    {
        let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id]
        try{
            const atualizandoUsuario = await usuariosDAO.atualizandoUsuario(parametro)
            res.send(atualizandoUsuario)
        } catch {
                res.send(err)
            }
    });
};


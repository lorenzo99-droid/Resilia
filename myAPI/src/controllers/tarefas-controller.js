module.exports = (app)=> {
    app.get("/tarefas", 
        (req, res)=> {
          res.send("Rota de tarefas ativada com GET");
        }
    )

    app.post("/tarefas", 
        (req, res)=> {
            res.send("Rota de tarefas ativada com POST");
        }
    )
};
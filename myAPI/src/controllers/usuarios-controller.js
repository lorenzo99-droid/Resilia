module.exports = (app, bd)=> {
    app.get("/usuarios", 
      (req, res)=> {
        res.send(bd.usuario);
      }
    )

    app.post("/usuarios", 
      (req, res)=> {
        res.send("Usuário inserido com sucesso");
      }
    
    )
};
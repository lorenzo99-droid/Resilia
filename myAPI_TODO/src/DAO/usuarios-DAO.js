module.exports = class UsuariosDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }
    todosUsuarios()
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.all('SELECT * FROM USUARIOS', (err, linhas) =>
            {
                if(err) reject ("Erro na consulta do banco");
                else resolve(linhas)
            })
        })
    }
    sendParamsUsuario(parametro)
    {
        return new Promise((resolve, reject) => 
        {
            this.bd.get('SELECT * FROM USUARIOS WHERE id = ?', parametro, (err, linhas) =>{
                if(err) reject ("Erro na consulta do banco");
                else resolve(linhas);
              })
        })
    }

    inserindoUsuarios(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)', parametro, (err, linhas) => {
                if(err) reject('Erro ao inserir usuario');
                else resolve('Usuario inserido com sucesso');
              })
        })
    }

    deletandoUsuario(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('DELETE FROM USUARIOS WHERE ID = ?', parametro, (err, linhas) => {
                if(err) {
                  reject('Erro ao inserir usuario')
                } else {
                  resolve('Usuario removido com sucesso');
                }
              })
        })
    }

    atualizandoUsuario(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('UPDATE USUARIOS SET ID = ?, nome = ?, email = ?, senha = ? WHERE id = ?', parametro, (err, linhas) => {
                if(err) reject('Erro ao atualizar usuario')
                else resolve('Usuario atualizado com sucesso');
              })
        })
    }
}
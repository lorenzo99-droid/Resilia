module.exports = class TarefasDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }
    todasTarefas()
    {
        return new Promise((resolve, reject)=>
        {
            this.bd.all('SELECT * FROM TAREFAS', (err, linhas) =>
            {
                if(err) reject ("Erro na consulta do banco");
                else resolve(linhas)
            })
        })
    }
    sendParamsTarefa(parametro)
    {
        return new Promise((resolve, reject) => 
        {
            this.bd.get('SELECT * FROM TAREFAS WHERE id = ?', parametro, (err, linhas) =>{
                if(err) reject ("Erro na consulta do banco");
                else resolve(linhas);
              })
        })
    }

    inserindoTarefa(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)', parametro, (err, linhas) => {
                if(err) reject('Erro ao inserir tarefas');
                else resolve('Tarefa inserida com sucesso');
              })
        })
    }

    deletandoTarefa(parametro)
    {
        return new Promise((resolve, reject) =>{
            this.bd.run('DELETE FROM TAREFAS WHERE id = ?', parametro, (err, linhas) =>{
                if(err) reject('Erro ao inserir tarefa');
                else resolve('Tarefa removida com sucesso');
            })
        })
    }

    atualizandoTarefa(parametro)
    {
        return new Promise((resolve, reject) =>
        {
            this.bd.run('UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ? STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ?, WHERE id = ?', parametro, (err, linhas) => {
                if(err) reject('Erro ao atualizar tarefa');
                else resolve('Tarefa atualizada com sucesso');
              })
        })
    }
}
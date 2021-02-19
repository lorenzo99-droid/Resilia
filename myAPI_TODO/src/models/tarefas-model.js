module.exports = class Tarefas {
    constructor (id, titulo, descricao, status, dataCriacao, idUsuario){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.dataCriacao = dataCriacao;
        this.idUsuario = idUsuario;
    }
}
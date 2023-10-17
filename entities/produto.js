class Produto {
    constructor(codigo, nome, descricao, tamanho, quantidade_estoque,
        valor, data_cadastro, categoria, categoria_nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.tamanho = tamanho;
        this.quantidade_estoque = quantidade_estoque;
        this.valor = valor;
        this.data_cadastro = data_cadastro;
        this.categoria = categoria;
        this.categoria_nome = categoria_nome;
    }
}

module.exports = Produto;
function desconto(valor) {
    return valor - (valor * 0.2)
    }


function criarProduto(nome, valor) {
    return {
        nome: nome,
        valor: valor,
        descontoProduto: desconto(valor)
    }
}

console.log(criarProduto('Leite', 6.7))
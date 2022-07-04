function soma() {
    let soma = 0
    for(i in arguments) { // arguments é uma palavra reservada que significa que eu posso passar os argumentos durante a chamada da função sem declará-los na função
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))
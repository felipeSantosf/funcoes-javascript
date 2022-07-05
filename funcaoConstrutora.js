function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () { // Se utilizar o this o método se torna público pq referencia o obj que a chamou
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro) // Function Carro Classe Carro
console.log(typeof ferrari) // Obj ferrari
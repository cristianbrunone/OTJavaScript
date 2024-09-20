// Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe um único parâmetro como argumento.
let isTruthy = function (valor) {
    return Boolean(valor); // Retorna true se o valor é truthy, caso contrário, false
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));          // false
console.log(isTruthy(-0));         // false
console.log(isTruthy(null));       // false
console.log(isTruthy(undefined));  // false
console.log(isTruthy(NaN));        // false
console.log(isTruthy(''));         // false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1));          // true
console.log(isTruthy(-1));         // true
console.log(isTruthy('hello'));    // true
console.log(isTruthy([]));         // true
console.log(isTruthy({}));         // true
console.log(isTruthy(true));       // true
console.log(isTruthy(function () { })); // true
console.log(isTruthy(Infinity));   // true
console.log(isTruthy(3.14));       // true
console.log(isTruthy(' '));        // true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as seguintes propriedades.
*/
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    placa: "ABC-1234",
    ano: 2020,
    cor: "branco",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,

    // Crie um método chamado `mudarCor`
    mudarCor: function (novaCor) {
        this.cor = novaCor;
    },

    // Crie um método chamado `obterCor`
    obterCor: function () {
        return this.cor;
    },

    // Crie um método chamado `obterModelo`
    obterModelo: function () {
        return this.modelo;
    },

    // Crie um método chamado `obterMarca`
    obterMarca: function () {
        return this.marca;
    },

    // Crie um método chamado `obterMarcaModelo`
    obterMarcaModelo: function () {
        return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },

    // Método para adicionar pessoas no carro
    adicionarPessoas: function (numPessoas) {
        if (this.quantidadePessoas + numPessoas > this.assentos) {
            let cabem = this.assentos - this.quantidadePessoas;
            return `Só cabem mais ${cabem} ${cabem === 1 ? 'pessoa' : 'pessoas'}!`;
        } else if (this.quantidadePessoas + numPessoas === this.assentos) {
            this.quantidadePessoas += numPessoas;
            return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
        } else if (this.quantidadePessoas + numPessoas < this.assentos) {
            this.quantidadePessoas += numPessoas;
            return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
        } else {
            return "O carro já está lotado!";
        }
    }
};

/*
Agora vamos verificar algumas informações do carro.
Qual a cor atual do carro?
*/
console.log(carro.obterCor()); // branco

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor()); // verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Esse carro é um Toyota Corolla

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4)); // Já temos 6 pessoas no carro!

// Faça o carro encher.
console.log(carro.adicionarPessoas(5)); // O carro já está lotado!

// Tire 4 pessoas do carro.
carro.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10)); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 2

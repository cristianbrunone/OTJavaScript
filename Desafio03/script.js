// Declarar uma variável qualquer, que receba um objeto vazio.
let cristian = {};

// Declarar uma variável `pessoa`, que receba suas informações pessoais.
let pessoa = {
    nome: "Cristian",
    sobrenome: "Brunone",
    sexo: "Masculino",
    idade: 26,
    altura: 1.80,
    peso: 90,
    andando: false,
    caminhouQuantosMetros: 0
};

// Adicionar o método `fazerAniversario` ao objeto `pessoa`.
pessoa.fazerAniversario = function () {
    this.idade += 1;
};

// Adicionar o método `andar` ao objeto `pessoa`.
pessoa.andar = function (metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
};

// Adicionar o método `parar` ao objeto `pessoa`.
pessoa.parar = function () {
    this.andando = false;
};

// Criar o método `nomeCompleto`.
pessoa.nomeCompleto = function () {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
};

// Criar o método `mostrarIdade`.
pessoa.mostrarIdade = function () {
    return `Olá, eu tenho ${this.idade} anos!`;
};

// Criar o método `mostrarPeso`.
pessoa.mostrarPeso = function () {
    return `Eu peso ${this.peso}Kg.`;
};

// Criar o método `mostrarAltura`.
pessoa.mostrarAltura = function () {
    return `Minha altura é ${this.altura}m.`;
};

// Qual o nome completo da pessoa?
console.log(pessoa.nomeCompleto());

// Qual a idade da pessoa?
console.log(pessoa.mostrarIdade());

// Qual o peso da pessoa?
console.log(pessoa.mostrarPeso());

// Qual a altura da pessoa?
console.log(pessoa.mostrarAltura());

// Faça a `pessoa` fazer 3 aniversários.
for (let i = 0; i < 3; i++) {
    pessoa.fazerAniversario();
}

// Quantos anos a `pessoa` tem agora?
console.log(pessoa.mostrarIdade());

// Faça a `pessoa` caminhar 3 vezes com metragens diferentes.
pessoa.andar(5);
pessoa.andar(10);
pessoa.andar(2);

// A pessoa ainda está andando?
console.log(pessoa.andando); // true

// Se a pessoa ainda está andando, faça-a parar.
pessoa.parar();

// E agora: a pessoa ainda está andando?
console.log(pessoa.andando); // false

// Quantos metros a pessoa andou?
console.log(pessoa.caminhouQuantosMetros); // Mostra o valor de metros caminhados

// Criar o método `apresentacao`.
pessoa.apresentacao = function () {
    let artigo = this.sexo === "Feminino" ? "a" : "o";
    let anoOuAnos = this.idade === 1 ? "ano" : "anos";
    let metroOuMetros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";

    return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anoOuAnos}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metroOuMetros}!`;
};

// Apresentação
console.log(pessoa.apresentacao());

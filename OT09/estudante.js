class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso, notas) {
        super(nome, idade); // Chamando o construtor da classe Pessoa
        this.curso = curso;
        this.notas = notas; // Array de notas
    }

    estudar() {
        console.log(`Estudante do curso ${this.curso}`);
    }

    calcularMedia() {
        const totalNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = totalNotas / this.notas.length;
        return media;
    }

    descreverEstudante() {
        console.log(`O estudante ${this.nome}, do curso ${this.curso}, tem uma média de ${this.calcularMedia().toFixed(2)}`);
    }
}


const estudante = new Estudante('Ana', 21, 'Engenharia', [8, 9.5, 7, 6.5]);
estudante.falar();          
estudante.estudar();        
estudante.descreverEstudante(); 

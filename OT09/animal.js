class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }
    
    falar() {
        console.log(`O animal é ${this.nome} é faz ${this.som}`)
    }
}

const cachorro = new Animal('cachorro', 'uau aua');
cachorro.falar();
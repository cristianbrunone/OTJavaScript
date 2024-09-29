class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima; 
    }

    descrever() {
        console.log(`O veículo é da marca ${this.marca}, modelo ${this.modelo}, e tem uma velocidade máxima de ${this.velocidadeMaxima} KM/H.`);
    }
}


const carro = new Veiculo('Fiat', 'Uno', 300);
carro.descrever(); 

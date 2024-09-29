class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial; 
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente! O saldo atual é R$${this.saldo.toFixed(2)}.`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso! Saldo restante: R$${this.saldo.toFixed(2)}.`);
        }
    }

    consultarSaldo() {
        console.log(`O saldo atual de ${this.titular} é R$${this.saldo.toFixed(2)}.`);
    }
}


const conta = new ContaBancaria('Maria', 500); 
conta.consultarSaldo(); 
conta.sacar(100);       
conta.sacar(600);       

class Jogo {

    static gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 10) + 1;
    }


    static adivinharNumero(palpite) {
        const numeroAleatorio = this.gerarNumeroAleatorio();
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou! O número era ${numeroAleatorio}.`);
            return true;
        } else {
            console.log(`Você errou! O número era ${numeroAleatorio}. Tente novamente!`);
            return false;
        }
    }
}


const palpiteUsuario = 5; 
Jogo.adivinharNumero(palpiteUsuario);

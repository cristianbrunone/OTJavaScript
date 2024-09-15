const readline = require('readline');

// Cria uma interface de leitura para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para gerar um número aleatório entre 1 e 5
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 5) + 1;
}

// Função para jogar o jogo
function jogarJogo(adivinhacao) {
    // Gera um número aleatório para o jogo
    const numeroCorreto = gerarNumeroAleatorio();

    // Verifica a adivinhação do usuário usando switch
    switch (adivinhacao) {
        case numeroCorreto:
            console.log(`Parabéns! Você acertou o número ${numeroCorreto}.`);
            break;
        default:
            console.log(`Que pena! O número correto era ${numeroCorreto}. Tente novamente!`);
            break;
    }
    // Fecha a interface de leitura após o jogo
    rl.close();
}

// Solicita ao usuário que insira um número
rl.question('Adivinhe um número entre 1 e 5: ', (resposta) => {
    // Converte a resposta para um número
    const adivinhacao = parseInt(resposta, 10);

    // Verifica se a resposta é um número válido entre 1 e 5
    if (isNaN(adivinhacao) || adivinhacao < 1 || adivinhacao > 5) {
        console.log('Por favor, insira um número válido entre 1 e 5.');
        rl.close();
    } else {
        jogarJogo(adivinhacao);
    }
});

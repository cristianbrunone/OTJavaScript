const readline = require('readline');

// Cria uma interface de leitura para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar a nota
function classificarNota(nota) {
    // Verifica a nota do aluno usando switch
    switch (true) {
        case (nota < 6):
            console.log('Reprovado');
            break;
        case (nota >= 6 && nota <= 7):
            console.log('Recuperação');
            break;
        case (nota > 7):
            console.log('Aprovado');
            break;
        default:
            console.log('Nota inválida');
            break;
    }
    // Fecha a interface de leitura após a classificação
    rl.close();
}

// Solicita ao usuário que insira a nota
rl.question('Digite a nota do aluno: ', (resposta) => {
    // Converte a resposta para um número
    const nota = parseFloat(resposta);

    // Verifica se a nota é um número válido
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Por favor, insira uma nota válida entre 0 e 10.');
        rl.close();
    } else {
        classificarNota(nota);
    }
});

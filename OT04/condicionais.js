// Função para classificar a idade
function classificarIdade(idade) {
    if (idade < 13) {
        return 'criança';
    } else if (idade >= 13 && idade <= 17) {
        return 'adolescente';
    } else if (idade >= 18 && idade <= 64) {
        return 'adulto';
    } else if (idade >= 65) {
        return 'idoso';
    } else {
        return 'Idade inválida'; // Caso a idade seja um valor negativo ou outro valor inválido
    }
}

// Exemplo de uso da função
let idade = 25; // Você pode mudar esse valor para testar diferentes idades
console.log(`A pessoa com ${idade} anos é classificada como: ${classificarIdade(idade)}`);

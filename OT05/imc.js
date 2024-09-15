// Função para calcular o Índice de Massa Corporal (IMC)
const calcularIMC = (peso, altura) => {
    if (peso <= 0 || altura <= 0) {
        return 'Peso e altura devem ser números positivos maiores que zero.';
    }
    const imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna o IMC com duas casas decimais
};

// Exemplo de uso da função
const peso = 70; // Você pode alterar esses valores para testar diferentes casos
const altura = 1.75; // Altura em metros
const imc = calcularIMC(peso, altura);
console.log(`O IMC para um peso de ${peso} kg e altura de ${altura} m é: ${imc}`);

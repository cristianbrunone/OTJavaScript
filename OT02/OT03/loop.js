// 1. Criando um loop: Crie um loop for que imprima números de 0 a 10.
for (let i = 0; i <= 10; i++) {
    console.log("Número: " + i);
}

console.log("-----");

// 2. Loop com condição: Crie um loop for que imprima somente números ímpares de 0 a 20.
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log("Número ímpar: " + i);
    }
}

console.log("-----");

// 3. Usando while: Crie um loop while que imprima números de 0 a 10.
let j = 0;
while (j <= 10) {
    console.log("Número (while): " + j);
    j++;
}

console.log("-----");

// 4. Interrompendo um loop: Crie um loop for que imprima números de 0 a 100, mas interrompa a execução quando chegar ao número 50.
for (let i = 0; i <= 100; i++) {
    if (i === 50) {
        console.log("Interrompendo o loop no número: " + i);
        break;
    }
    console.log("Número: " + i);
}

console.log("-----");

// 5. Pulando uma iteração: Crie um loop for que imprima números de 0 a 20, mas pule a impressão do número 13.
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        continue; // Pula a iteração quando i é 13
    }
    console.log("Número: " + i);
}

console.log("-----");

// 6. Iterando um Array: Crie um array de nomes e use um loop for...of para imprimir cada nome do array.
const nomes = ["Ana", "Carlos", "Bianca", "João", "Maria"];
for (const nome of nomes) {
    console.log("Nome: " + nome);
}

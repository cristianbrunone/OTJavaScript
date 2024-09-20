// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function arepaYQueso(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let resultadoEmpanada = arepaYQueso(8, 12) + 5;

// Qual o valor atualizado dessa variável?
console.log(resultadoEmpanada); // 25

// Declare uma nova variável, sem valor.
let hallaca;

// Crie uma função que adicione um valor à variável criada acima, e retorne a string:
// O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.
function adicionarValor(newValor) {
    hallaca = newValor;
    return `O valor da variável agora é ${hallaca}.`;
}

// Invoque a função criada acima.
console.log(adicionarValor(20)); // O valor da variável agora é 20.

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é 20.
*/

// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos;
// 2. Se qualquer um dos três argumentos não estiver preenchido, a função deve retornar a string:
// Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
function multiplicarPlatanos(cachapa, pabellon, toston) {
    if (cachapa === undefined || pabellon === undefined || toston === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return (cachapa * pabellon * toston) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicarPlatanos(3, 4)); // Preencha todos os valores corretamente!

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
Preencha todos os valores corretamente!
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicarPlatanos(3, 4, 5)); // 62

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
62
*/

// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
// 4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne o valor booleano `false`.
// 6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
function operarCacao(a, b, c) {
    if (a === undefined && b === undefined && c === undefined) {
        return false;
    }
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    }
    if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    }
    if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    }
    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.)
console.log(operarCacao());            // false
console.log(operarCacao(10));          // 10
console.log(operarCacao(10, 5));       // 15
console.log(operarCacao(10, 5, 3));    // 5

// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
/*
false
10
15
5
*/

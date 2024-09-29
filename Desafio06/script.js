/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual
qualquer para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do
campeonato, e imprima o nome desse campeonato no console.
*/

// Variável com o nome do campeonato
const championship = 'Campeonato Paulista';
console.log(`Campeonato: ${championship}`);

/*
Declare uma variável chamada `teams`, que receberá um array com 5
elementos. Os elementos serão nomes de times do campeonato escolhido,
e os nomes devem estar na ordem em que eles aparecem na tabela no
momento da solução desse desafio.
*/

// Array com 5 times do campeonato
const teams = ['Palmeiras', 'Corinthians', 'Santos', 'São Paulo', 'Bragantino'];
console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes
características:
- A função deve receber um número por parâmetro;
- A função deve retornar a frase:
"O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
- Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
que está nessa posição no array criado acima com os nomes dos times.
- A função só deve retornar a frase acima somente se o time estiver entre os 5 primeiros.
- Se não houver time para a posição passada, deve retornar a mensagem:
"Não temos a informação do time que está nessa posição."
*/

// Função para mostrar o time pela posição no campeonato
function showTeamPosition(position) {
    const index = position - 1;
    if (index >= 0 && index < teams.length) {
        return `O time que está em ${position}º lugar é o ${teams[index]}.`;
    }
    return "Não temos a informação do time que está nessa posição.";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando
a função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

// Exibindo a posição de 4 times (incluindo um que não está entre os 5 primeiros)
console.log(showTeamPosition(1)); // Palmeiras
console.log(showTeamPosition(3)); // Santos
console.log(showTeamPosition(5)); // Bragantino
console.log(showTeamPosition(6)); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura
de repetição "while".
*/

// Exibindo números de 20 a 30 com while
let num = 20;
while (num <= 30) {
    console.log(num);
    num++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
- A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
- Escolha 5 cores que serão convertidas do nome da cor para o seu
equivalente hexadecimal (pode ser qualquer tom);
- Usando a estrutura switch, verifique se a cor passada por parâmetro é
algum hexa escolhido. Se for, retorne a frase:
"O hexadecimal para a cor [COR] é [HEXADECIMAL].";
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
a frase:
"Não temos o equivalente hexadecimal para [COR]."
*/

// Função para converter cor para hexadecimal
function convertToHex(cor) {
    let hexadecimal;
    switch (cor.toLowerCase()) {
        case 'red':
            hexadecimal = '#FF0000';
            break;
        case 'green':
            hexadecimal = '#00FF00';
            break;
        case 'blue':
            hexadecimal = '#0000FF';
            break;
        case 'yellow':
            hexadecimal = '#FFFF00';
            break;
        case 'black':
            hexadecimal = '#000000';
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`;
    }
    return `O hexadecimal para a cor ${cor} é ${hexadecimal}.`;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada
acima.
*/

// Testando a função com 8 cores
console.log(convertToHex('red'));    
console.log(convertToHex('green'));  
console.log(convertToHex('blue'));   
console.log(convertToHex('yellow')); 
console.log(convertToHex('black')); 
console.log(convertToHex('purple')); 
console.log(convertToHex('white'));  
console.log(convertToHex('orange')); 

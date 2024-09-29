// Crie uma variável qualquer, que receba um array com alguns valores aleatórios - ao menos 5.
const arrayAleatorio = [10, 'texto', true, null, 42];

// Crie uma função que receba um array como parâmetro, e retorne esse array.
function retornarArray(array) {
    return array;
}

// Imprima o segundo índice do array retornado pela função criada acima.
console.log(retornarArray(arrayAleatorio)[1]); // Saída: 'texto'


// Crie uma função que receba dois parâmetros: o primeiro, um array de valores, e o segundo, um número.
function retornarIndice(array, indice) {
    return array[indice];
}

// Exemplo de uso:
console.log(retornarIndice(arrayAleatorio, 2)); // Saída: true


// Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
const arrayDiverso = [25, 'código', false, {nome: 'objeto'}, [1, 2, 3]];

// Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
arrayDiverso.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
});

// Crie uma função chamada `book` que recebe o nome de um livro como parâmetro
function book(nomeLivro) {
    const livros = {
        'O Senhor dos Anéis': {
            quantidadePaginas: 1178,
            autor: 'J.R.R. Tolkien',
            editora: 'HarperCollins'
        },
        '1984': {
            quantidadePaginas: 328,
            autor: 'George Orwell',
            editora: 'Companhia das Letras'
        },
        'Harry Potter': {
            quantidadePaginas: 410,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        }
    };

    // Retorna o objeto do livro especificado ou todos os livros
    return nomeLivro ? livros[nomeLivro] : livros;
}

// Usando a função `book`, imprima o objeto com todos os livros.
console.log(book());


// Imprima a quantidade de páginas de um livro qualquer.
const livroEscolhido = '1984';
console.log(`O livro ${livroEscolhido} tem ${book(livroEscolhido).quantidadePaginas} páginas!`);


// Imprima o nome do autor de um livro qualquer.
console.log(`O autor do livro ${livroEscolhido} é ${book(livroEscolhido).autor}.`);


// Imprima o nome da editora de um livro qualquer.
console.log(`O livro ${livroEscolhido} foi publicado pela editora ${book(livroEscolhido).editora}.`);


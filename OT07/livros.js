// 1. Criar e Adicionar Pares Chave-Valor no Map
let livros = new Map();
livros.set('Dom Quixote', 'Miguel de Cervantes');
livros.set('1984', 'George Orwell');
livros.set('O Senhor dos Anéis', 'J.R.R. Tolkien');

// 2. Acessar Valor no Map
let autor1984 = livros.get('1984');
console.log('Autor de 1984:', autor1984);

// 3. Iterar Sobre um Map
for (let [titulo, autor] of livros) {
    console.log(`Título: ${ titulo }, Autor: ${ autor }`);
}

// 4. Usando Métodos do Map
console.log('Número de livros:', livros.size); // size
livros.delete('Dom Quixote'); // delete
console.log('Dom Quixote ainda está no map?', livros.has('Dom Quixote')); // has


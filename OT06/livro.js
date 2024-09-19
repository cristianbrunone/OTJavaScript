// Criar um objeto livro com propriedades titulo e autor
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien"
};

// Criar outra variável que referencie o objeto livro
let referenciaLivro = livro;

// Modificar a propriedade titulo através da variável referenciaLivro
referenciaLivro.titulo = "O Hobbit";

// Verificar se o objeto original livro foi alterado
console.log("Título original do livro:", livro.titulo);
console.log("Título através da referência:", referenciaLivro.titulo);

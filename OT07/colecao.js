// 5. Map com Tipos de Chaves Diferentes
let colecao = new Map();
colecao.set('nome', 'Livro Genérico');
colecao.set(42, 'Número da Vida');
colecao.set({ id: 1 }, 'Objeto de Identificação');

for (let [chave, valor] of colecao) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}
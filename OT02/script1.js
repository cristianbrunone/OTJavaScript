// 1. Adicionando Elementos a um Array
let animais = [];
animais.push("cachorro");
animais.push("gato");
animais.push("leão");
console.log("Array após adicionar três animais:", animais);

// 2. Removendo o Primeiro Elemento do Array
animais.shift();
console.log("Array após remover o primeiro animal:", animais);

// 3. Inserindo Elementos no Início do Array
animais.unshift("elefante");
animais.unshift("tigre");
console.log("Array após adicionar dois animais no início:", animais);

// 4. Alterando Elementos Específicos do Array
animais[1] = "girafa";
console.log("Array após mudar o segundo elemento para 'girafa':", animais);

// 5. Usando `length` para Contar Elementos
let frutas = ["maçã", "banana", "laranja", "uva"];
console.log("Número total de frutas no array:", frutas.length);

// 6. Percorrendo um Array com Loop `for`
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}

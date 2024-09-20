// 1. Criar e Adicionar Valores ao Set
let frutas = new Set();
frutas.add("Manga");
frutas.add("Maçã");
frutas.add("Banana");

// Tentando adicionar uma fruta que já está no Set
frutas.add("Manga"); 

console.log("Frutas no Set:", frutas);

// 2. Verificar Valores no Set
console.log("O Set tem Maçã?", frutas.has("Maçã"));
console.log("O Set tem Uva?", frutas.has("Uva"));

// 3. Remover Valores do Set
frutas.delete("Maçã");
console.log("Após remover Maçã:", frutas);

// 4. Limpar o Set
frutas.clear();
console.log("Set após limpar:", frutas);

// 5. Tamanho do Set
let numeros = new Set([1, 2, 3, 4, 5]);
console.log("Tamanho do Set de números:", numeros.size);

// 6. Iterar Sobre um Set
for (let numero of numeros) {
    console.log("Número:", numero);
}

// 7. Criar um Set a Partir de um Array (Remover duplicatas)
let arrayComDuplicatas = ["Manga", "Banana", "Maçã", "Manga", "Uva", "Banana"];
let frutasUnicas = new Set(arrayComDuplicatas);
console.log("Set sem duplicatas:", frutasUnicas);

// Se quiser transformar de volta em array, você pode fazer isso:
let arraySemDuplicatas = [...frutasUnicas];
console.log("Array sem duplicatas:", arraySemDuplicatas);

// 2. Criar um objeto exemplo para iterar sobre suas propriedades
let pessoa = {
    nome: "Cristian",
    idade: 30,
    cidade: "Puerto Ordaz"
};

// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}
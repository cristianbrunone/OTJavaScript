let canciones = ["Despacito", "Shape of You", "Havana"];
let copiaCanciones = [...canciones];

// Alterando um elemento no array copiado
copiaCanciones[0] = "Blinding Lights";

console.log("Array original:", canciones);
console.log("Array copiado:", copiaCanciones);

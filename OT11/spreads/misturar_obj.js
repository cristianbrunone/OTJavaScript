let infoBasica = { titulo: "Inception", director: "Christopher Nolan" };
let infoComplementaria = { año: 2010, genero: "Ciencia ficción" };

let pelicula = { ...infoBasica, ...infoComplementaria };
console.log(pelicula);

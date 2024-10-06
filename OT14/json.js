// Objeto JavaScript com os dados do usuário
let usuario = {
    nombre: "Maria",
    edad: 28,
    email: "maria@example.com",
    activo: true,
    intereses: ["programación", "lectura", "música"]
};

// Convertendo o objeto para JSON (simulação de envio para servidor)
let datosJSON = JSON.stringify(usuario);
console.log("Dados enviados para o servidor:", datosJSON);

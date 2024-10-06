// Simulação de dados recebidos de uma API (string JSON)
let datosDelServidor = '{"producto":"Laptop","precio":1200,"disponible":true,"caracteristicas":["Intel i7","16GB RAM","512GB SSD"]}';

// Convertendo a string JSON para um objeto JavaScript
let producto = JSON.parse(datosDelServidor);

// Acessando os dados do objeto
console.log("Producto:", producto.producto);       // "Laptop"
console.log("Precio:", producto.precio);           // 1200
console.log("Disponible:", producto.disponible);   // true
console.log("Características:", producto.caracteristicas.join(", ")); // "Intel i7, 16GB RAM, 512GB SSD"

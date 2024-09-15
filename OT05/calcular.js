// Función de flecha para calcular el área de un rectángulo
const calcularAreaRetangulo = (largura, altura) => {
    // Verifica si la largura y la altura son números positivos
    if (largura <= 0 || altura <= 0) {
        return 'Largura y altura deben ser números positivos mayores que cero.';
    }
    // Calcula el área del rectángulo
    const area = largura * altura;
    return area;
};

// Ejemplo de uso de la función
const largura = 5; // Puedes cambiar estos valores para probar
const altura = 10; // Puedes cambiar estos valores para probar
const resultado = calcularAreaRetangulo(largura, altura);
console.log(`El área del rectángulo es: ${resultado}`);

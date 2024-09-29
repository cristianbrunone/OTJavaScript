class Utilitario {

    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = Utilitario.celsiusParaFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit}°F`);

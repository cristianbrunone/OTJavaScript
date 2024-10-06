let contador = 0;
const iniciarContador = () => {
    setInterval(() => {
        contador++;
        console.log(contador);
    }, 1000);
};

iniciarContador();

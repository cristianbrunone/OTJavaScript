function crearMenu(entradas, platosPrincipales, postres) {
    let menu = [...entradas, ...platosPrincipales, ...postres];
    return menu;
}

let entradas = ["Sopa", "Ensalada"];
let platosPrincipales = ["Pollo asado", "Pasta"];
let postres = ["Tarta de chocolate", "Helado"];

let menuDelDia = crearMenu(entradas, platosPrincipales, postres);
console.log("Menu del día:", menuDelDia);

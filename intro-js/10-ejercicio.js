/* Crea una función que reciba una lista de edades y verifique si todos los elementos son mayores de
edad (18 años o más). */

const edades = /*[19, 25, 32, 17]*/ [19, 25, 32, 18] ;

const verificarMayoresDeEdad = (edades) => {
    return edades.every(edad => edad >= 18); 
}

const resultado = verificarMayoresDeEdad(edades);

if (resultado) {
    console.log("Todos son mayores de edad.");
} else {
    console.log("No todos son mayores de edad.");
}

console.log(resultado);
// Resultado esperado: false
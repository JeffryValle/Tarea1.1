/* Crea una función que reciba un arreglo de palabras y retorne un objeto donde las claves sean las
palabras y los valores la cantidad de veces que aparecen.
*/

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

const contarPalabras = ( arreglo ) => {
    return arreglo.reduce( ( acc, palabra ) => {
        acc[palabra] = ( acc[palabra] || 0) + 1;
        return acc;
    }, {});
};

const resultado = contarPalabras( palabras );
console.log( resultado );

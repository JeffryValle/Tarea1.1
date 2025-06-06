/* Crea una función que reciba dos arreglos y devuelva un nuevo arreglo que contenga todos los
elementos sin repetir. 
*/
const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];


const combinarListasSinRepetir = ( arreglo1, arreglo2 ) => {
    const unidos = [...arreglo1, ...arreglo2];
    const noRepetidos = unidos.filter( (value, index, array) => 
        index === array.indexOf(value)  
    );
    return noRepetidos;
}


const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);
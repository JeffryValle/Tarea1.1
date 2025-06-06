/* Escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una
propiedad específica. */

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

const borrarDuplicados = ( arreglo, propiedad ) => {
    const filtro = arreglo.filter( (value, index, array) => 
        index === array.findIndex( valor => (
            valor[propiedad] === value[propiedad]
        ))
    );
    return filtro;
};

const resultado = borrarDuplicados(elementos, 'id');
console.log(resultado);
// Resultado esperado: [{ id: 1, nombre: 'A' }, { id: 2, nombre: 'B' }]

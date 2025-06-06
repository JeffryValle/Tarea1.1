// Dado un arreglo de objetos con valores y pesos, calcula el promedio ponderado.
const notas = [
 { valor: 90, peso: 0.5 },
 { valor: 80, peso: 0.3 },
 { valor: 70, peso: 0.2 }
];

const promedioPonderado = ( arreglo ) => {
    const sumaValores = arreglo.reduce(( acc, elemento ) => {
        return acc + (elemento.valor * elemento.peso);
    }, 0); // * Valor inicial, 0
    const sumaPesos = arreglo.reduce(( acc, elemento ) => {
        return acc + elemento.peso;
    }, 0); // * Valor inicial, 0
    return sumaValores / sumaPesos; // * Promedio ponderado
}

const resultado = promedioPonderado(notas);
console.log(resultado);
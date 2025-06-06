

const datos = [
 { categoria: 'fruta', nombre: 'manzana' },
 { categoria: 'verdura', nombre: 'zanahoria' },
 { categoria: 'fruta', nombre: 'banana' },
 { categoria: 'verdura', nombre: 'lechuga' }
];

const agruparPorPropiedad = ( arreglo, propiedad ) => {
    return arreglo.reduce(( acc, elemento ) => {
        const clave = elemento[propiedad]; 
        if ( !acc[clave] ) { 
            acc[clave] = [];
        }
        acc[clave].push( elemento );
        return acc;
    }, {}); 
}

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);


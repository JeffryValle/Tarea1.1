/* Crea una función que reciba un objeto persona y retorne una copia modificada con un nuevo
nombre y la edad aumentada en 1 año, sin modificar el objeto original. */

const persona = { nombre: 'Luis', edad: 30 };

console.log(persona);

const modificarPersona = ( persona, nombre ) => {
    const objetoModificado = { ...persona, nombre: nombre, edad: persona.edad + 1 };
    return objetoModificado;
}

    
const nuevaPersona = modificarPersona( persona, 'Carlos' );
console.log(nuevaPersona);
console.log(persona);

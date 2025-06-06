/* Escribe una función obtenerUsuario(id) que simule una llamada asíncrona con setTimeout y
retorne una promesa que se resuelve con un objeto { id, nombre }. Encadena dos llamadas
para obtener los nombres de dos usuarios diferentes y mostrar el mensaje:
"Usuarios cargados: Juan y María"
*/

const obtenerUsuario = ( id ) => { 
    return new Promise( resolve => {
        setTimeout( () => {
            const usuarios = {
                1: { id: 1, nombre: 'Juan' },
                2: { id: 2, nombre: 'María' }
            };
            resolve(usuarios[id]);
        }, 1000); 
    });
}

const cargarUsuarios = async () => {
    try {
        const usuario1 = await obtenerUsuario(1);
        const usuario2 = await obtenerUsuario(2);
        console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
}

cargarUsuarios();
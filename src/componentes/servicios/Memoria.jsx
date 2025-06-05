import { createContext, useReducer } from "react";

/*const listaMock = [{
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": 1,
    "icono": "🏃‍➡️",
    "meta": 356,
    "plazo": "2030-01-01",
    "completado": 5,
},
{
    "id": "2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0,
},
{
    "id": "3",
    "detalles": "Viajar a parques nacionales",
    "periodo": "mes",
    "eventos": 1,
    "icono": "✈️",
    "meta": 60,
    "plazo": "2030-01-01",
    "completado": 40,
}];
*/
const estadoInicial = {        // es una forma de normalizar los datos 
    orden: [],   // va a tener una lista de las id de la lista
    objetos: {}  // va a guardar un mapa de las id de la lista
};
/*const memoria = localStorage.getItem('metas');
const estadoInicial = memoria ? JSON.parse(memoria): {
    orden: [],
    objetos: {}
};*/

function reductor(estado, accion){
    switch (accion.tipo) {
        case 'colocar': {
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {})
            };
            //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'crear': {
            const id = accion.meta.id;  //  String(Math.random ());//
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            };
            //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'actualizar': {
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.orden[id],
                ...accion.meta
                };
            const nuevoEstado = {...estado};
            //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        case 'borrar': {
            const id = accion.id;
            const nuevoOrden = estado.orden.filter(item => item !== id);
            delete estado.objetos[id];
            const nuevoEstado = {
                orden: nuevoOrden,
                objetos: estado.objetos
            };
            //localStorage.setItem('metas', JSON.stringify(nuevoEstado))
            return nuevoEstado;
        };
        default:
            throw new Error();
    }
}

//const metas = reductor(estadoInicial, {tipo: 'colocar', metas: '/metas.json'});
// reductor(estadoInicial, {tipo: 'colocar', metas: listaMock});


export const Contexto = createContext(null);

function Memoria({children}) {
    const [estado, enviar] = useReducer(reductor, estadoInicial);
    return ( 
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
     );
}

export default Memoria;


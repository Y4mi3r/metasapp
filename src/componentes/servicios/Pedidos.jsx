export async function pedirMetas() {  // es una funcion asincrona y todo lo que sea asincrono tienen que usar await 
    const response = await fetch('/metas.json');   // es un metodo asincrono
    const metas = await response.json();  // tambien es un metodo asincrono
    return metas;
}

export async function pedirMeta() {  // es una funcion asincrona y todo lo que sea asincrono tienen que usar await 
    const response = await fetch('/meta.json');   // es un metodo asincrono
    const meta = await response.json();  // tambien es un metodo asincrono
    return meta;
}

export async function crearMeta() {  // es una funcion asincrona y todo lo que sea asincrono tienen que usar await 
    const response = await fetch('/meta.json');   // es un metodo asincrono
    const metaCreada = await response.json(); // tambien es un metodo asincrono
    console.log('Meta creada!', metaCreada)
    return metaCreada;
}

export async function actualizarMeta() {  // es una funcion asincrona y todo lo que sea asincrono tienen que usar await 
    const response = await fetch('/meta.json');   // es un metodo asincrono
    const metaActualizada = await response.json();  // tambien es un metodo asincrono
    console.log('Meta actualizada!', metaActualizada)
    return metaActualizada;
}

export async function borrarMeta() {  // es una funcion asincrona y todo lo que sea asincrono tienen que usar await 
    const response = await fetch('/meta.json');   // es un metodo asincrono
    const metaBorrada = await response.json();
    console.log('Meta borrada!', metaBorrada.id)
    return metaBorrada.id;
}

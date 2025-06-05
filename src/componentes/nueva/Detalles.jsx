import { useEffect, useState, useContext } from 'react';
import estilos from './Detalles.module.css';
import { Contexto } from '../servicios/Memoria';
import { useNavigate, useParams } from 'react-router-dom';
import { actualizarMeta, borrarMeta, crearMeta } from '../servicios/Pedidos';

function Detalles() {

    const { id } = useParams();

    const [form, setForm] = useState ({
        detalles:'',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃‍➡️',
        meta: 52,
        plazo: '2022-01-01',
        completado: 0
    });

    const [estado, enviar] = useContext(Contexto);

    const {detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onchange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value}))
    }

    const navegar = useNavigate();

    const metaMemoria = estado.objetos[id];

    useEffect(() => {
        const metaMemoria = estado.objetos[id];
        if(!id) return;
        if(!metaMemoria){
            return navegar('/404');
        }
        setForm(estado.objetos[id]);
    }, [id, metaMemoria, navegar]);


    const crear = async () => {
        const nuevaMeta = await crearMeta();
        enviar({ tipo: 'crear', meta: nuevaMeta });
        navegar('/lista');
    }

    const actualizar = async () => {
        const metaActualizada = await actualizarMeta();
        enviar({ tipo: 'actualizar', meta: metaActualizada });
        navegar('/lista');
    }

    const borrar = async () => {
        const idBorrada = await borrarMeta();
        enviar({ tipo: 'borrar', id: idBorrada });
        navegar('/lista');
    }


    const cancelar = () => {
        navegar('/lista');
    }

    const frecuencia = ["día", "semana","mes","año"]
    const iconos = ["🏃‍➡️","📚","✈️","+"]
    return ( 
        <div className='tarjeta'>
            <form className='p-4'>
                <label className='label'>
                    Describe tu Meta
                    <input 
                    className='input' 
                    placeholder="ej. 52 caminatas" 
                    value={detalles}
                    onChange={e => onchange(e, 'detalles')} 
                    />
                </label>
                <label className='label'>
                    ¿Con que frecuencia deseas cumplir tu metas? <span>(ej. 1 vez a la semana)</span>
                    <div className='flex mb-6'>
                        <input 
                        className='input mr-6' 
                        type="number" 
                        value={eventos}
                        onChange={e => onchange(e, 'eventos')}
                        />
                        <select 
                        className='input' 
                        value={periodo}
                        onChange={e => onchange(e, 'periodo')}>
                            {frecuencia.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className='label'>
                    ¿Cuantas veces deseas completar esta meta?
                    <input 
                    className='input' 
                    type="number" 
                    value={meta}
                    onChange={e => onchange(e, 'meta')}
                    />
                </label>
                <label className='label'>
                    ¿Tienes una fecha límite?
                    <input 
                    className='input' 
                    type="date" 
                    value={plazo}
                    onChange={e => onchange(e, 'plazo')}
                    />
                </label>
                <label className='label'>
                    ¿Cuantas veces has completado ya esta meta?
                    <input 
                    className='input' 
                    type="number" 
                    value={completado}
                    onChange={e => onchange(e, 'completado')}
                    />
                </label>
                <label className='label'>
                    escoge el icono para la meta
                    <select 
                    className='input' 
                    value={icono}
                    onChange={e => onchange(e, 'icono')}>
                        {iconos.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}                    
                    </select>

                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button className='boton boton--negro' onClick={crear}>Crear</button>}   {/* se usa el !id es para saber si no hay una identificacion aparece el boton crear */}  
                {id && <button className='boton boton--negro' onClick={actualizar}>Actualizar</button>} {/* se usa el id es para saber si hay una identificacion aparece el boton de actualizar */}
                {id && <button className='boton boton--rojo' onClick={borrar}>Borrar</button>} {/* se usa el id es para saber si hay una identificacion aparece el boton de actualizar */}
                <button className='boton boton--gris' onClick={cancelar}>Cancelar</button>
            </div>
        </div>
     );
}

export default Detalles;
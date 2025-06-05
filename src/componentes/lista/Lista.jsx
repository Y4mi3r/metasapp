import { useContext } from "react";
import Meta from "./Metas";
import { Contexto } from "../servicios/Memoria";
import { Outlet } from "react-router-dom";


function Lista() {

    const [estado] = useContext(Contexto);

    return ( 
        <>
            {estado.orden.map( id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet/>
        </>
     );
}

export default Lista;
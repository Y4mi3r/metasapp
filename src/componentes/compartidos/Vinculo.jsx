import estilos from './Principal.module.css'
import { Link } from 'react-router-dom';

function Vinculo({ children, texto, to }) {
    return (  
        <Link to={to} className={estilos.vinculo}>
            {children}
            {texto && <span className={estilos.texto}>{texto}</span>}
        </Link>
    );
}

export default Vinculo;

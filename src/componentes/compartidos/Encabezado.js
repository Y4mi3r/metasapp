import Logo from './img/logo.svg';
import {ReactComponent as Perfil} from './img/perfil.svg';
import './Encabezado.css';

function Encabezado() {
    return (
        <div className='ecabezado'>
            <div className='contenedor'>
                <img src={Logo} alt="Logo" className='logo' />
                
                <a className='titulo' href='/'>Metas App</a>
            </div>
            <nav>
                {/*<img src={Perfil} alt="Perfil" className='icono2' /> */}
                <a href="/perfil" className='vinculo'>Perfil</a>
                <Perfil className='perfil' />

            </nav>
        </div>
    );
}

export default Encabezado;
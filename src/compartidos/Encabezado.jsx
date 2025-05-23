import Logo from './img/logo.svg'
import Perfil from './img/perfil.svg'

function Encabezado() {
    return (
        <div>
            <div className='ecabezado'>
                <img src={Logo} className='mr-2 h-10 w-10' />
                <a href='/'>Metas App</a>
            </div>
            <nav className='flex'>
                <img src={Perfil} className='h-6 w-6'/>
                <a href='/perfil'>Perfil</a>
            </nav>
        </div>
    );
}

export default Encabezado;
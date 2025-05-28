import Logo from './img/logo.svg'
import Perfil from './img/perfil.svg'
import estilos from './Encabezado.module.css'
import Vinculo from './Vinculo';


function Encabezado() {
    return (
        <header className={estilos.ecabezado}>
            <div className={estilos.contenedor}>
                <img src={Logo} className={estilos.logo} />
                <a href='/' className={estilos.titulo}>Metas App</a>
            </div>
            <nav className={estilos.vinculo}>
                <Vinculo href="/perfil">
                    <img src={Perfil} className={estilos.icono} />
                </Vinculo>
            </nav>
        </header>
    );
}

export default Encabezado;
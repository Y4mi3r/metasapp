import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import Lista from './img/lista.svg';
import Nueva from './img/nueva.svg';
function Principal({ children }) {
    return (
        <div className={estilos.principal}> 
            <aside className={estilos.aside}>
                <Vinculo to="/lista" texto="Lista de Metas">
                    <img src={Lista} className={estilos.icono} />
                </Vinculo>
                <Vinculo to="/nueva" texto="Nueva Meta">
                    <img src={Nueva} className={estilos.icono} />
                </Vinculo>
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    );
}

export default Principal;

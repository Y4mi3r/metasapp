import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import Lista from './img/lista.svg';
import Nueva from './img/nueva.svg';
function Principal({ children }) {
    return (
        <div className={estilos.principal}> {/* <--- esta etiqueta se llama un fragmento  */}
            <aside className={estilos.aside}>
                <Vinculo href="/lista" texto="Lista de Metas">
                    <img src={Lista} className={estilos.icono} />
                </Vinculo>
                <Vinculo href="/crear" texto="Nueva Meta">
                    <img src={Nueva} className={estilos.icono} />
                </Vinculo>
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>
    );
}

export default Principal;

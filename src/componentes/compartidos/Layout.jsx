import Encabezado from './Encabezado';
import Principal from './Principal'
import Pie from './Pie';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <> {/* <--- esta etiqueta se llama un fragmento  */}
            <Encabezado />
            <Principal><Outlet></Outlet></Principal>
            <Pie />
        </>
    );
}

export default Layout;


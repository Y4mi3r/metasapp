import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal'
import Pie from './componentes/compartidos/Pie';
import Meta from './componentes/lista/Metas';
import './index.css'
function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Principal><Meta/></Principal>
      <Pie/>
    </div>
  );
}

export default App;
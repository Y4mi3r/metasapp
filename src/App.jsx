import './index.css'
import Encabezado from './componentes/compartidos/Encabezado';
import Principal from './componentes/compartidos/Principal'
import Pie from './componentes/compartidos/Pie';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Principal>{/*<Lista/>*/} <Detalles></Detalles></Principal>
      <Pie/>
    </div>
  );
}

export default App;
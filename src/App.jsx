import Encabezado from './compartidos/Encabezado';
import Principal from './compartidos/Principal'
import Pie from './compartidos/Pie';
function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Principal/>
      <Pie/>
    </div>
  );
}

export default App;
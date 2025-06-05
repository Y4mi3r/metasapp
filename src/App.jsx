import './index.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './componentes/compartidos/Layout';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import NoEncontrado from './componentes/compartidos/Noencontrado';
import Modal from './componentes/compartidos/Modal';
import { useContext, useEffect } from 'react';
import { Contexto } from './componentes/servicios/Memoria';
import { pedirMetas } from './componentes/servicios/Pedidos';

function App() {
  
  const [,enviar] = useContext(Contexto);

  useEffect(() => {
    const obtenerMetas = async () => {
      const metas = await pedirMetas();
      enviar({ tipo: 'colocar', metas });
    };
    obtenerMetas();
  }, []);


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path='/Lista' element={<Lista />}>
          <Route path='/Lista/:id' element={
            <Modal>
              <Detalles/>
            </Modal>}/>
        </Route>
        <Route path='/Nueva' element={<Detalles />} />
      </Route>
      <Route path='*' element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
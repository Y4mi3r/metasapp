import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import Memoria from './componentes/servicios/Memoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Memoria>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Memoria>
    </React.StrictMode>);
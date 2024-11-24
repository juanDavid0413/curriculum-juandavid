import React from 'react';
import './estilos.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Encabezado from './componentes/Encabezado';
import SobreMi from './componentes/SobreMi';
import Educacion from './componentes/Educacion';
import Habilidades from './componentes/Habilidades';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <Router>
      <div id='barra_menu'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/SobreMi">Sobre Mi</Link>
            </li>
            <li>
              <Link to="/Educacion">Educación</Link>
            </li>
            <li>
              <Link to="/Habilidades">Habilidades</Link>
            </li>
            <li>
              <Link to="/Proyectos">Proyectos</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Encabezado />} /> 
          <Route path="/SobreMi" element={<SobreMi />} /> 
          <Route path="/Educacion" element={<Educacion />} /> 
          <Route path="/Habilidades" element={<Habilidades />} /> 
          <Route path="/Proyectos" element={<Proyectos />} /> 
          <Route path="/Contacto" element={<Contacto />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

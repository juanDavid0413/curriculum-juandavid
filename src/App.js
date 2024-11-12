import React from 'react';
import Encabezado from './componentes/Encabezado';
import Sobre_mi from './componentes/Sobre_mi';
import Educacion from './componentes/Educacion';
import Habilidades from './componentes/Habilidades';
import Proyectos from './componentes/Proyectos';
import Contacto from './componentes/Contacto';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Encabezado />
      <div id="bloque">
      <div id="izquierdo">
      <Sobre_mi />
      <Educacion />
      </div>
      <div id="derecho">
      <Proyectos />
      <Contacto />
      <Habilidades />
      </div>
      </div>
    </div>
  );
};

export default App;

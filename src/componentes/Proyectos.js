import React, { useState } from 'react';
import curriclum_bootstrap from '../imagenes/imgcurriculumbootstrap.png'; 
import logo_paramedic from '../imagenes/Logo_paramedic_tour.png';
import img_code from '../imagenes/code.png';

const Proyectos = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredDiv(id);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const proyectos = [
    {
      id: 'paramedic',
      imagen: logo_paramedic,
      titulo: 'Paramedic Tour S.A.S',
      enlace: 'https://paramedictour.netlify.app/',
      textoBoton: 'Visitar Paramedictour'
    },
    {
      id: 'curriculum',
      imagen: curriclum_bootstrap,
      titulo: 'Curriculum con Bootstrap',
      enlace: 'https://devjuandacast.netlify.app/',
      textoBoton: 'Ver Proyecto'
    },
    {
      id: 'kiosko',
      imagen: img_code,
      titulo: 'Kiosko Tecnológico',
      enlace: 'https://github.com/juanDavid0413/kiosko_tecnologico',
      textoBoton: 'Ver Proyecto'
    }
  ];

  return (
    <section className="educacion">
      {proyectos.map((proyecto) => (
        <div
          key={proyecto.id}
          className="divisor"
          onMouseEnter={() => handleMouseEnter(proyecto.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={proyecto.imagen} alt={proyecto.titulo} className="img_educacion" />
          <h2><strong>{proyecto.titulo}</strong></h2>
          {hoveredDiv === proyecto.id && (
            <a href={proyecto.enlace} className="btn-link" target="_blank" rel="noopener noreferrer">
              {proyecto.textoBoton}
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Proyectos;

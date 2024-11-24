import React, { useState } from 'react'; 
import grados_bachiller from '../imagenes/gradosbachiller.png'; 
import desarrollo_software from '../imagenes/desarrolloweb.png'; 
import curso_sena from '../imagenes/mecanicamotos.png';

const EducationItem = ({ id, title, startDate, status, center, imageSrc, hoveredDiv, handleMouseEnter, handleMouseLeave }) => (
  <div 
    className="divisor"
    onMouseEnter={() => handleMouseEnter(id)}
    onMouseLeave={handleMouseLeave}
  >
    {hoveredDiv === id ? (
      <p>
        <h2>{title}</h2><br />
        INICIO: {startDate}<br />
        ESTADO: {status}<br />
        CENTRO DE EDUCACION: {center}
      </p>
    ) : (
      <>
        <img src={imageSrc} alt={`img${id}`} className='img_educacion' />
        <h2><strong>{title}</strong></h2>
      </>
    )}
  </div>
);

const Educacion = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId); 
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null); 
  };

  const educationData = [
    {
      id: 'desarrollo_software',
      title: 'Técnico en Análisis y Desarrollo de Software',
      startDate: 'Octubre 2023',
      status: 'Cursando',
      center: 'Censa',
      imageSrc: desarrollo_software
    },
    {
      id: 'grados_bachiller',
      title: 'Bachillerato Académico',
      startDate: 'Enero 2020',
      status: 'Finalizado',
      center: 'Cendi',
      imageSrc: grados_bachiller
    },
    {
      id: 'curso_sena',
      title: 'Mantenimiento Preventivo de Motocicletas',
      startDate: 'Enero 2019',
      status: 'Finalizado',
      center: 'SENA',
      imageSrc: curso_sena
    }
  ];

  return (
    <section className="educacion">
      {educationData.map((item) => (
        <EducationItem 
          key={item.id}
          id={item.id}
          title={item.title}
          startDate={item.startDate}
          status={item.status}
          center={item.center}
          imageSrc={item.imageSrc}
          hoveredDiv={hoveredDiv}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
    </section>
  );
};

export default Educacion;

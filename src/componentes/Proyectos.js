import React, { useState } from 'react';
import '../App.css'; 

import imagen1 from '../imagenes/imgcurriculumbootstrap.png'; 
import imagen2 from '../imagenes/Logo_paramedic_tour.png';

const ImageHover = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
  <div id="projects">
      <h2>Proyectos:</h2>
    <div className="image-hover-container">
      <div className="image-item">
        <h3>Curriculum Personal Con Bootstrap</h3>
        <div
          className="image-wrapper"
          onMouseEnter={() => handleMouseEnter('image1')}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imagen1} alt="Imagen 1" className="image" />
          {hoveredImage === 'image1' && (
            <div className="overlay">
             <a href='https://devjuandacast.netlify.app'><button className="overlay-button">Ir A Curriculum Juan David</button> </a>
            </div>
           )}
        </div>
      </div>

      <div className="image-item">
        <h3>Pramedic tour  <br></br>S.A.S </h3>
        <div
          className="image-wrapper"
          onMouseEnter={() => handleMouseEnter('image2')}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imagen2} alt="Imagen 2" className="image" />
          {hoveredImage === 'image2' && (
            <div className="overlay">
              <a href='https://paramedictour.netlify.app'><button className="overlay-button">Ir A Paramedic Tour S.A.S</button></a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageHover;

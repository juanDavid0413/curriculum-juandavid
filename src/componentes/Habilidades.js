import React, { useState } from 'react';
import img_github from '../imagenes/imggithub.png';
import imgvisual_studios from '../imagenes/imgvisual_studio.png';
import imgbootstrap from '../imagenes/imgbootstrap.png';
import imgcss3 from '../imagenes/imgcss3.png';
import imgdjango from '../imagenes/imgdjango.png';
import imgdjangorest from '../imagenes/imgdjangorest.png';
import imghtml5 from '../imagenes/imghtml5.png';
import imgjs from '../imagenes/imgjs.png';
import imgmongodb from '../imagenes/imgmongodb.png';
import imgmysql from '../imagenes/imgmysql.png';
import imgpython from '../imagenes/imgpython.png';
import imgreact from '../imagenes/imgreact.png';

const Habilidades = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const habilidadesData = [
    { id: 'react', img: imgreact, text: 'React: Biblioteca JavaScript para construir interfaces de usuario.' },
    { id: 'python', img: imgpython, text: 'Python: Lenguaje de programación para desarrollo web, ciencia de datos, y más.' },
    { id: 'mysql', img: imgmysql, text: 'MySQL: Sistema de gestión de bases de datos relacional.' },
    { id: 'mongodb', img: imgmongodb, text: 'MongoDB: Base de datos NoSQL orientada a documentos.' },
    { id: 'js', img: imgjs, text: 'JavaScript: Lenguaje de programación para desarrollo web y aplicaciones.' },
    { id: 'html5', img: imghtml5, text: 'HTML5: Lenguaje de marcado para estructurar contenido en la web.' },
    { id: 'djangorest', img: imgdjangorest, text: 'Django REST Framework: Framework para construir APIs en Django.' },
    { id: 'django', img: imgdjango, text: 'Django: Framework web de alto nivel para Python.' },
    { id: 'css3', img: imgcss3, text: 'CSS3: Lenguaje de hojas de estilo para diseño web.' },
    { id: 'bootstrap', img: imgbootstrap, text: 'Bootstrap: Framework CSS para desarrollar sitios web rápidos y responsivos.' },
    { id: 'visual_studios', img: imgvisual_studios, text: 'Visual Studio: Entorno de desarrollo integrado (IDE) para múltiples lenguajes.' },
    { id: 'github', img: img_github, text: 'GitHub: Plataforma de desarrollo colaborativo basada en Git.' }
  ];

  const handleMouseEnter = (id) => {
    setHoveredDiv(id);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <section className="habilidades">
      {habilidadesData.map((item) => (
        <div
          key={item.id}
          className="container_habilidades"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredDiv === item.id ? (
            <p>{item.text}</p>
          ) : (
            <img src={item.img} alt={item.id} className="img_habilidades" /> 
          )}
        </div>
      ))}
    </section>
  );
};

export default Habilidades;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../estilo_carrusel.css';
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
  return (
    <div class="carrusel">
    <div>
    <h2>Habilidades Basicas En Tecnologias Como:</h2>
    </div>
    <div>
    <Carousel
    autoPlay
    interval={3000}
    transitionTime={1000}
    infiniteLoop
    showArrows={true}
    onChange={(index) => console.log(`Imagen ${index} seleccionada`)}
    >
    <div>
    <img src={img_github} alt="logo_GitHub"/>
    <p legend="logo_GitHub">GitHub</p>
    </div>
    <div>
    <img src={imgvisual_studios} alt="imgvisual_studios"/>
    <p legend="imgvisual_studios">Visual Studio Code / Visual Studio</p>
    </div>
    <div>
      <img src={imgbootstrap} alt="imgbootstrap"/>
      <p legend="imgbootstrap">Bootstrap</p>
    </div>
    <div>
      <img src={imgcss3} alt="imgcss3"/>
      <p legend="imgcss3">CSS3</p>
    </div>
    <div>
      <img src={imgdjango} alt="imgdjango"/>
      <p legend="imgdjango">Django Framework</p>
    </div>
    <div>
      <img src={imgdjangorest} alt="imgdjangorest"/>
      <p legend="imgdjangorest">Django Rest Framework</p>
    </div>
    <div>
      <img src={imghtml5} alt="imghtml5"/>
      <p legend="imghtml5">HTML5</p>
    </div>
    <div>
      <img src={imgjs} alt="imgjs"/>
      <p legend="imgjs">JavaScript</p>
    </div>
    <div>
      <img src={imgmongodb} alt="imgmongodb"/>
      <p legend="imgmongodb">MongoDB</p>
    </div>
    <div>
      <img src={imgmysql} alt="imgmysql"/>
      <p legend="imgmysql">MySQL</p>
    </div>
    <div>
      <img src={imgpython} alt="imgpython"/>
      <p legend="imgpython">Python</p>
    </div>
    <div>
      <img src={imgreact} alt="imgreact"/>
      <p legend="imgreact">React Framework</p>
    </div>
    </Carousel>
    </div>
    </div>
  );
};

export default Habilidades;

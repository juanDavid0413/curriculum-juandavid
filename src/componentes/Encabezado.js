import React from 'react'; 
import foto_perfil from '../imagenes/fotoPerfil2.png';

const Encabezado = () => {
  return (
    
    <header className="header">
      <section class="encabezado">
       <div class="contenedor_encabezado">
       <img src={foto_perfil} alt="fotoPerfil" id='foto_perfil'/>
        <div id='info_personal'>
        <h1 id='nombre_principal'>Juan David<br></br>Castañeda Vargas</h1>
        <h2>Estudiante De Analisis Y Desarrollo De Software.</h2>
        <p> Mi objetivo es seguir creciendo como profesional, 
            aprender de los mejores y contribuir a proyectos que tengan un impacto real.</p>
        </div>
       </div>
      </section>
    </header>
  );
};


export default Encabezado;

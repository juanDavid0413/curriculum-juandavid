import React from 'react'; 
import foto_perfil from '../imagenes/foto_perfil.jpg';

const Encabezado = () => {
  return (
    
    <header className="header">
      <div class="encabezado">
      <div class="foto_perfil">
        <img src={foto_perfil} alt="fotoPerfil" className="profile-img" />
      </div>
      <div className="header-info">
        <br></br>
        <h1>Juan David<br></br>Castañeda</h1>
        <p>Técnico en Análisis y Desarrollo de Software</p>
      </div>
      </div>
    </header>
  );
};


export default Encabezado;

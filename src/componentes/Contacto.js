import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




const Contacto = () => {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>¡Estoy disponible para nuevas oportunidades! Puedes contactarme a través de:</p>
      <a href="https://github.com/juanDavid0413"><FaGithubSquare size={50}/></a>
      <a href="https://wa.me/3045256826"><FaSquareWhatsapp size={50} /></a>
      <a href="https://www.linkedin.com/in/juan-david-casta%C3%B1eda-v-5943742b6/"><FaLinkedin size={50}/></a>
      <a href="mailto:ju99da04ca13va@gmail.com"><SiGmail size={50}/></a>
    </section>
  );
};

export default Contacto;

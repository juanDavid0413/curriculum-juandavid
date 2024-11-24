import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos antes de enviar el mensaje.');
      return; 
    }

    setError('');

    emailjs.sendForm('service_t56v8nm', 'template_h2m6byk', e.target, '27lc7PyqNMOzwbXgT')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>¡Estoy disponible para nuevas oportunidades! Puedes contactarme a través de:</p>

      <div className="social-links">
        <a href="https://github.com/juanDavid0413">
          <FaGithubSquare size={50} />
        </a>
        <a href="https://wa.me/3045256826">
          <FaSquareWhatsapp size={50} />
        </a>
        <a href="https://www.linkedin.com/in/juan-david-casta%C3%B1eda-v-5943742b6/">
          <FaLinkedin size={50} />
        </a>
        <a href="mailto:ju99da04ca13va@gmail.com">
          <SiGmail size={50} />
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <table className="contact-form-table">
          <tbody>
            <tr>
              <td><label htmlFor="name">Nombre:</label></td>
              <td><input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
              /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Correo electrónico:</label></td>
              <td><input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
              /></td>
            </tr>
            <tr>
              <td><label htmlFor="message">Mensaje:</label></td>
              <td><textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
              ></textarea></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Enviar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
};

export default Contacto;

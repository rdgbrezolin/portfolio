import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Contato.css';
import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contato() {
  return (
    <div className="body-contato" id="contact">
      <div className="body-triang">
        <section className="triang1"></section>
      </div>
      <h1 className="h1-contato">CONTATO</h1>
      <h3>Tem alguma pergunta ou quer trabalhar comigo?</h3>
      <section className="body-input">
        <form className="form">
          <input type="text" name="nome" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <textarea name="textarea" rows="8"  placeholder="Mensagem" />
          <button type="submit" className="btn-email">Enviar</button>
        </form>
      </section>
      <section className="body-links">
      <a href="https://github.com/rdgbrezolin" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" className="icons" /></a>
      <a href="https://www.linkedin.com/in/rodrigobrezolin" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className="icons"/></a>
      <a href="https://www.instagram.com/rdgbrezolin" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x" className="icons"/></a>
      <a href="https://www.facebook.com/rodrigoknx" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" className="icons"/></a>
      <a href="https://api.whatsapp.com/send?phone=5512982399787" target="_blank"><FontAwesomeIcon icon={faWhatsapp} size="3x" className="icons"/></a>
      </section>
    </div>
  );
}

export default Contato;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Contato.css";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("enviando");

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/rdgbrezolin@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setStatus("enviado");
          form.reset();
          setTimeout(() => setStatus(""), 3000);
        } else {
          setStatus("erro");
          setTimeout(() => setStatus(""), 3000);
        }
      })
      .catch(() => {
        setStatus("erro");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <div className="body-contato" id="contact">
      <div className="body-triang">
        <section className="triang1"></section>
      </div>
      <h1 className="h1-contato">CONTATO</h1>
      <h3>Tem alguma pergunta ou quer trabalhar comigo?</h3>
      <section className="body-input">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" rows="8" placeholder="Mensagem" required />
          <button type="submit" className="btn-email">
            {status === "enviando"
              ? "Enviando..."
              : status === "enviado"
              ? "Mensagem Enviada!"
              : status === "erro"
              ? "Erro ao Enviar"
              : "Enviar"}
          </button>
        </form>
      </section>
      <section className="body-links">
        <a
          href="https://github.com/rdgbrezolin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigobrezolin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="icons" />
        </a>
        <a
          href="https://www.instagram.com/rdgbrezolin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" className="icons" />
        </a>
        <a
          href="https://www.facebook.com/rodrigoknx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" className="icons" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5512982399787"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="3x" className="icons" />
        </a>
      </section>
    </div>
  );
}

export default Contato;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFighterJet,
  faLightbulb,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Sobre.css";
import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import imageProfile from "../image/Avatar.png";

function Sobre() {
  return (
    <div className="body-sobre" id="about">
      <h1 className="h1-sobre">SOBRE</h1>
      <section className="body-perfil">
        <article className="foto-perfil">
          <img src={imageProfile} />
        </article>
        <article className="texto-perfil">
          Apaixonado por tecnologia, atuo na área há mais de 5 anos,
          desenvolvendo soluções e melhorando o desempenho de aplicações.
          Dedicado a desenvolver soluções robustas e inovadoras, com foco em
          performance e experiência do usuário.
          <br />
          <br />
          - Engenheiro de controle e automação pela Universidade Federal de
          Itajubá.
          <br />- Pós graduando em Engenharia de Software pela USP.
        </article>
      </section>
      <section className="container-figuras">
        <article className="figuras">
          <FontAwesomeIcon icon={faFighterJet} color="white" size="3x" />
          <h2>Rápido</h2>
          <p>Páginas com carregamentos rápidos e interações sem atrasos.</p>
        </article>
        <article className="figuras">
          <FontAwesomeIcon icon={faLightbulb} color="white" size="3x" />
          <h2>Interativo</h2>
          <p>UX/UI intuitiva de fácil usabilidade para o usuário.</p>
        </article>
        <article className="figuras">
          <FontAwesomeIcon icon={faMobileAlt} color="white" size="3x" />
          <h2>Responsivo</h2>
          <p>Layout se adapta à qualquer dispositivo, grande ou pequeno.</p>
        </article>
        <article className="figuras">
          <FontAwesomeIcon icon={faCode} color="white" size="3x" />
          <h2>Código Limpo</h2>
          <p>Código desenvolvido com as boas práticas de programação.</p>
        </article>
      </section>
      <section className="body-habilidades">
        <FontAwesomeIcon icon={faReact} size="4x" className="icons-sobre" />
        <FontAwesomeIcon icon={faCss3Alt} size="4x" className="icons-sobre" />
        <FontAwesomeIcon icon={faHtml5} size="4x" className="icons-sobre" />
        <FontAwesomeIcon icon={faJsSquare} size="4x" className="icons-sobre" />
        <FontAwesomeIcon icon={faBootstrap} size="4x" className="icons-sobre" />
        <FontAwesomeIcon icon={faGithub} size="4x" className="icons-sobre" />
      </section>
    </div>
  );
}

export default Sobre;

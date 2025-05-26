import React from "react";
import "../style/Menu.css";
import Logo from "../image/logonew.png";

function Menu() {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={Logo} className="img-logo" />
      </div>
      <section className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">SOBRE</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;

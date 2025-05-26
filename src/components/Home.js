import React from "react";
import Menu from "./Menu.js";
import "../style/Home.css";

function Home() {
  return (
    <div className="body-home" id="home">
      <Menu />
      <section className="text-home">
        <span className="txt1">RODRIGOBREZOLIN</span>
        <span className="txt2">FRONT-END</span>
        <span className="txt3">DEVELOPER</span>
        <span className="txt4">REACT - VUE - ANGULAR</span>
        <button className="btn-home">
          <a href="#about">ME CONHEÇA MELHOR.</a>
        </button>
      </section>
    </div>
  );
}

export default Home;

import React from "react";
import ReactCardCarousel from "react-card-carousel";
import "../style/Projetos.css";

function Projetos() {
  return (
    <div className="body-projetos" id="projects" style={{ maxHeight: "600px" }}>
      <h1 className="h1-projetos">CURRÍCULO</h1>
      <div
        className="body-cards"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          minHeight: "200px",
        }}
      >
        <button
          className="btn-home"
          style={{ maxWidth: "300px", margin: "0 auto", width: "100%" }}
        >
          <a
            href="/portfolio/curriculo_rodrigo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            VISUALIZAR
          </a>
        </button>
        <button
          className="btn-home"
          style={{ maxWidth: "300px", margin: "0 auto", width: "100%" }}
        >
          <a href="/portfolio/curriculo_rodrigo.pdf" download>
            DOWNLOAD - 2025
          </a>
        </button>
        {/* <ReactCardCarousel autoplay={ true } autoplay_speed={ 3000 }>
          <div className="card-style first">
          </div>
          <div className="card-style second">
          </div>
          <div className="card-style third">
          </div>
          <div className="card-style fourth">
          </div>
          <div className="card-style fifth">
          </div>
          <div className="card-style sixth">
          </div>
          <div className="card-style seventh">
          </div>
          <div className="card-style eighth">
          </div>
        </ReactCardCarousel> */}
      </div>
    </div>
  );
}

export default Projetos;

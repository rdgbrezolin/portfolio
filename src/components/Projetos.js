import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import '../style/Projetos.css';

function Projetos() {

  return (
    <div className="body-projetos" id="projects">

      <h1 className="h1-projetos">PROJETOS</h1>
      <div className="body-cards">
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 3000 }>
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
        </ReactCardCarousel>
      </div>
    </div>
  );
}

export default Projetos;
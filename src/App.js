import React from 'react';
import Home from './components/Home.js';
import Contato from './components/Contato.js';
import Sobre from './components/Sobre.js';
import Projetos from './components/Projetos.js';


function App() {
  return (
    <div>
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;

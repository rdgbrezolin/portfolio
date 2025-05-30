import React from "react";
import "./Curriculo.css";

function Curriculo() {
  return (
    <section className="curriculo">
      <h2>Currículo</h2>
      <div className="perfil">
        <h3>Perfil Profissional</h3>
        <p>
          Desenvolvedor com mais de 5 anos de experiência, apaixonado por
          tecnologia. Engenheiro de Controle e Automação pela Universidade
          Federal de Itajubá e Desenvolvedor web full-stack formado pela Trybe.
        </p>
      </div>
      <div className="educacao">
        <h3>Educação</h3>
        <ul>
          <li>
            <strong>Universidade Federal de Itajubá</strong> - Engenharia de
            Controle e Automação (2015-2024)
          </li>
          <li>
            <strong>Trybe</strong> - Desenvolvedor Full-Stack (2020-2021)
          </li>
          <li>
            <strong>ETEC - Marcos Uchôas dos Santos Penchel</strong> - Técnico
            de Informática (2011-2012)
          </li>
          <li>
            <strong>Microcamp</strong> - Web Designer (2010-2011)
          </li>
        </ul>
      </div>
      <div className="experiencia">
        <h3>Experiência</h3>
        <ul>
          <li>
            <strong>Desenvolvedor Front-end @ Fourtime Tecnologia</strong> (2024
            - Atual)
            <br />
            Responsável por manter, desenvolver e liderar novos projetos para
            clientes diversos, utilizando tecnologias modernas, focado em
            desenvolver interfaces responsivas e intuitivas.
          </li>
          <li>
            <strong>Desenvolvedor Front-end @ On The Go</strong> (Mar 2023 - Dez
            2023)
            <br />
            Responsável por manter e desenvolver novas features, trabalhando
            sempre em conjunto com o designer, construindo novas telas
            intuitivas e responsivas.
          </li>
          <li>
            <strong>Desenvolvedor Front-end @ Ipê Digital</strong> (Jul 2021 -
            Mar 2023)
            <br />
            Desenvolvedor front-end utilizando VueJS e React Native, criação de
            páginas responsivas, versionamento de código utilizando Git com
            Gitflow, gerenciamento de tarefas SCRUM.
          </li>
          <li>
            <strong>Desenvolvedor Front-end Estágio @ Yoobot</strong> (Mar 2021
            - Jul 2021)
            <br />
            Desenvolvimento de uma plataforma de comunicação entre prestadores
            de serviços e seus clientes.
          </li>
          <li>
            <strong>Desenvolvedor Full-stack Estágio @ Manuel VAIOT</strong>{" "}
            (Ago 2020 - Mar 2021)
            <br />
            Desenvolvimento de uma plataforma de comunicação entre médicos e
            pacientes.
          </li>
          <li>
            <strong>Desenvolvedor Full-stack Estágio @ INPE</strong> (Jan 2011 -
            Jan 2012)
            <br />
            Desenvolvimento de uma plataforma para coleta de dados.
          </li>
        </ul>
      </div>
      <div className="certificados">
        <h3>Certificados e Conquistas</h3>
        <ul>
          <li>
            <strong>
              Vice campeão do Maker HackLab com a criação da startup Cuid-e
            </strong>{" "}
            (2019)
          </li>
          <li>
            <strong>White Belt Lean Six Sigma - CAE Treinamentos</strong> (2022)
          </li>
          <li>
            <strong>
              Projeto de realidade virtual para treinamento de funcionários -
              Ball Corporation
            </strong>{" "}
            (2019)
          </li>
          <li>
            <strong>Professor de Micro Informática - Voluntário</strong>{" "}
            (2014-2015)
          </li>
        </ul>
      </div>
      <div className="habilidades">
        <h3>Habilidades, Atividades e Interesses</h3>
        <ul>
          <li>
            Técnico: Desenvolvedor Front-end React, Angular, Next, Vue.js,
            TypeScript, Python com foco na experiência do usuário (+5 anos de
            experiência).
          </li>
          <li>
            Skills: HTML, CSS, JavaScript ES6+, TypeScript, Angular, Vue.js,
            Nuxt.js, React, Next, Unit Testing, Git, WordPress, Figma, SQL,
            Styled Component, Tailwind.
          </li>
          <li>Interesses: Explorar e aprender novas tecnologias em geral.</li>
        </ul>
      </div>
      <a href="/curriculo.pdf" download className="btn-download">
        Baixar PDF
      </a>
    </section>
  );
}

export default Curriculo;

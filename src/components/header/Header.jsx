import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Raquel Stefany
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#inicio" onClick={() => setActiveNav('#inicio')} className={activeNav === "#inicio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>
                Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#sobre" onClick={() => setActiveNav('#sobre')} className={activeNav === "#sobre" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>
                Sobre
              </a>
            </li>
            <li className="nav__item">
              <a href="#habilidades" onClick={() => setActiveNav('#habilidades')} className={activeNav === "#habilidades" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>
                Habilidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#projetos" onClick={() => setActiveNav('#projetos')} className={activeNav === "#projetos" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#formacao" onClick={() => setActiveNav('#formacao')} className={activeNav === "#formacao" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>
                Formação
              </a>
            </li>
            <li className="nav__item">
              <a href="#certificacoes" onClick={() => setActiveNav('#certificacoes')} className={activeNav === "#certificacoes" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Certificações
              </a>
            </li>
            <li className="nav__item">
              <a href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === "#contato" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>
                Contato
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

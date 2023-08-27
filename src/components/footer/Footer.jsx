import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Raquel Stefany</h1>

        <ul className="footer__list">
          <li>
            <a href="#sobre" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#habilidades" className="footer__link">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#formacao" className="footer__link">
              Formação
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/raquelrodriguez013/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/RaquelStefany"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/raquelstefany/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Raquel Stefany. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

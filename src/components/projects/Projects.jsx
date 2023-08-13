import React, { useState } from "react";
import "./Projects.css";
import Project01 from "../../assets/img/projetcs/1.png";
import Project02 from "../../assets/img/projetcs/2.png";
import Project03 from "../../assets/img/projetcs/3.png";
import Project04 from "../../assets/img/projetcs/4.png";
import Project05 from "../../assets/img/projetcs/5.png";
import Project06 from "../../assets/img/projetcs/6.png";
import Project07 from "../../assets/img/projetcs/7.png";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <section className="services section" id="projetos">
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Conheça Alguns Projetos</span>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <img
                src={Project01}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">LocalTech</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">LocalTech</h3>
                <div className="services__modal-project">
                  <img
                    src={Project01}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/LocalTechTCC"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=LocalTechTCC"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="JavaScript"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                          alt="PHP"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                          alt="MySQL"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  O LocalTech tem como função o auxílio a reparos de desktops,
                  além de artigos sobre novas tecnologias, o site também trará
                  dicas sobre o que fazer com equipamentos eletrônicos sem mais
                  utilidades.
                  <br />
                  O site conta com um auxilio remoto de chat online, onde
                  usuários do sistema podem entrar em contato com técnicos
                  cadastrados na plataforma, para assim terem um auxilio online
                  para seus desktops.
                  <br />
                  Na plataforma também é possível encontrar Assistências
                  Técnicas parceiras do LocalTech, assim tendo acesso a
                  informações de contato e endereço de onde encontra-las para
                  ter um auxilio presencial.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/LocalTechTCC"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://localtech.rf.gd/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project02}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">LocalTech - Administrador</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">
                  LocalTech - Administrador
                </h3>
                <div className="services__modal-project">
                  <img
                    src={Project02}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/LocalTechTCC"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=LocalTechTCC"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="JavaScript"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                          alt="PHP"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                          alt="MySQL"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  Sistemas de Administrador do LocalTech, onde é possível fazer
                  a analise de Clientes, Técnicos e Assistências Técnicas.
                  <br />
                  Também é possível realizar o controle de artigos e postagem do
                  sistemas, realização do CRUD completo de todos os dados
                  disponíveis no sistema, possuindo assim um sistema totalmente
                  funcional.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/LocalTechTCC"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://localtech.rf.gd/view/admin/LoginAdmin.php"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project03}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">O Brasil Para Cristo</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">O Brasil Para Cristo</h3>
                <div className="services__modal-project">
                  <img
                    src={Project03}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/OBPC-ParqueContinental"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=OBPC-ParqueContinental"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="React"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="JavaScript"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  Site de informações sobre Cultos e Eventos da Igreja
                  Pentecostal O Brasil Para Cristo, contando também com
                  informações de conjuntos e lideres da Igreja.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/OBPC-ParqueContinental"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://obpc-pq.vercel.app/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project04}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">TechDelas</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(4)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 4
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">TechDelas</h3>
                <div className="services__modal-project">
                  <img
                    src={Project04}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/TechDelaas/TechDelas"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=TechDelaas&repo=TechDelas"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  Focando em Desenvolvimento Web e Software para a Internet
                  estamos aqui para impulsionar pessoas rumo ao sucesso. Site de
                  links referente ao TechDelas, onde é possível encontrar links
                  de portfolios e informações de Redes Sociais.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/TechDelaas/TechDelas"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://techdelas.com.br/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project05}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">Volaric</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(5)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 5
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Volaric</h3>
                <div className="services__modal-project">
                  <img
                    src={Project05}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/VolaricFATEC"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=VolaricFATEC"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="JavaScript"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  O Volaric museu do Brasil veio para misturar arte, cultura e
                  tecnologia.
                  <br />
                  Em busca de museus que forneçam esses três pilares e
                  contemplasse o nosso País, desenvolvemos o Volaric. Destina-se
                  a quem pretende conhecer melhor o que torna cada obra única,
                  adquirindo obras digitais e/ou colaborando com a divulgação da
                  arte, bem como conhecer melhor a história de cada obra
                  existente.
                  <br />A Volaric também está apostando nos NFTs (Non-Fungible
                  Token). Um token criptográfico que representa algo único,
                  porque acreditamos que a arte nos NFTs é o futuro.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/VolaricFATEC"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://raquelstefany.github.io/VolaricFATEC/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project06}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">Afro Hair</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(6)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 6
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Afro Hair</h3>
                <div className="services__modal-project">
                  <img
                    src={Project06}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/AfroHair"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=AfroHair"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="JavaScript"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  Afro Hair é um site comercial e informativo dedicado ao salão
                  de beleza especializado em cabelos afro. A plataforma oferece
                  uma variedade de informações essenciais para os clientes,
                  incluindo detalhes sobre serviços, produtos disponíveis,
                  canais de comunicação e horários de funcionamento. Além de
                  espaço com feedbacks e depoimentos de clientes.
                  <br />
                  Com o objetivo de valorizar a beleza natural dos cabelos afro
                  e promover a autoestima de clientes. Através do site, buscamos
                  oferecer um espaço acolhedor e informativo, onde os visitantes
                  possam encontrar todas as informações sobre o Afro Hair.
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/AfroHair"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://afro-hair.vercel.app/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <img
                src={Project07}
                alt="Tela Inicial do Projeto"
                className="services__image"
              />
              <h3 className="services__title">Geek Shop</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(7)}>
              Veja Mais
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 7
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Geek Shop</h3>
                <div className="services__modal-project">
                  <img
                    src={Project07}
                    alt="Tela Inicial do Projeto"
                    className="services__image-modal"
                  />
                  <div>
                    <a
                      href="https://github.com/RaquelStefany/JavaScript-React-Bootstrap-Descomplica-Nubank"
                      target="_blank"
                    >
                      <img
                        src="https://github-readme-stats.vercel.app/api/pin/?username=RaquelStefany&repo=JavaScript-React-Bootstrap-Descomplica-Nubank"
                        alt="GitHub do Projeto"
                      />
                    </a>
                    <ul className="services__modal-languages grid">
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="React"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS"
                          className="services__modal-icon"
                        />
                      </li>
                      <li className="services__modal-language">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                          alt="Bootstrap"
                          className="services__modal-icon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="services__modal-description">
                  O GeekShop é um site inovador e intuitivo, projetado
                  especialmente para os entusiastas da cultura geek, gamers, fãs
                  de quadrinhos, filmes e séries.
                  <br />
                  Aqui, com apenas um clique, você encontrará o seu look geek
                  perfeito para expressar sua paixão pela cultura nerd de forma
                  única e estilosa!
                </p>
                <div className="services__buttons">
                  <a
                    href="https://github.com/RaquelStefany/JavaScript-React-Bootstrap-Descomplica-Nubank"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar GitHub
                    <i class="uil uil-web-grid modal-icon"></i>
                  </a>
                  <a
                    href="https://java-script-react-bootstrap-descomplica-nubank.vercel.app/"
                    className="button button--flex modal-button"
                    target="_blank"
                  >
                    Acessar Projeto
                    <i class="uil uil-browser modal-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

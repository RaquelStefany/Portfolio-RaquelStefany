import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="formacao">
      <h2 className="section__title">Formação</h2>
      <span className="section__subtitle">Minhas Experiências</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educação
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiência
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sistemas para Internet</h3>
                <span className="qualification__subtitle">
                  Curso Superior, Fatec Baixada Santista Rubens Lara
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2022 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Desenvolvimento de Sistemas
                </h3>
                <span className="qualification__subtitle">
                  Curso Técnico, Etec Doutura Ruth Cardoso
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Fev 2021 - Jul 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Estagiário de TI</h3>
                <span className="qualification__subtitle">
                  Analista de Desenvolvimento de Sistemas, Grupo Gelog
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2023 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  Analista de Sistemas, Fatec Baixada Santista Rubens Lara
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Abr 2023 - Presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

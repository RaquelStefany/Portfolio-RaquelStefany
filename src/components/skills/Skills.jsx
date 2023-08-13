import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import General from "./General";

const Skills = () => {
  return (
    <section className="skills section" id="habilidades">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Meu Nível Técnico</span>

      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Design/>
        <General/>
      </div>
    </section>
  );
};

export default Skills;

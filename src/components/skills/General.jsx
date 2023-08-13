import React from "react";

const General = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Geral
        </h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">
                            Office 365
                        </h3>
                        <span className="skills__level">
                            Básico
                        </span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">
                            Power BI
                        </h3>
                        <span className="skills__level">
                            Básico
                        </span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">
                            Informática
                        </h3>
                        <span className="skills__level">
                            Básico
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default General;

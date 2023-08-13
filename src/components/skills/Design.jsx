import React from "react";

const Design = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Design
        </h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">
                            Figma
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
                            Adobe Photoshop
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
                            Canva
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

export default Design;

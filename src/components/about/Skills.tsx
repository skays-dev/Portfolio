import React from "react";

const skillsContent = [
  { skillClass: "p60", skillPercent: "60", skillName: "C" },
  { skillClass: "p100", skillPercent: "100", skillName: "PYTHON" },
  { skillClass: "p100", skillPercent: "100", skillName: "JS/TS" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT JS" },
  { skillClass: "p95", skillPercent: "95", skillName: "NEXT JS" },
  { skillClass: "p100", skillPercent: "100", skillName: "sass" },
  { skillClass: "p100", skillPercent: "100", skillName: "TAILWIND" },
  { skillClass: "p80", skillPercent: "80", skillName: "LARAVEL" },
  { skillClass: "p80", skillPercent: "80", skillName: "EXPRESS JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "MYSQL" },
  { skillClass: "p100", skillPercent: "100", skillName: "MONGODB" },
  { skillClass: "p100", skillPercent: "100", skillName: "GRAPHQL" },
  { skillClass: "p50", skillPercent: "50", skillName: "UI/UX" },
  { skillClass: "p50", skillPercent: "50", skillName: "AGILE" },
  { skillClass: "p100", skillPercent: "100", skillName: "GIT/GITHUB/GITLAB" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;

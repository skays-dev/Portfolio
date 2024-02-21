import Link from "next/link";
import { FC } from "react";

const educationContent = [
  {
    year: "2023 - Present",
    degree: "",
    institute: "International University of Rabat",
    details: `Specialization: Full Stack Java/Spring-Boot/Angular Program`,
  },
  {
    year: "2021 - 2023",
    degree: "Technicien Specialise",
    institute: "ISTA Development digital option full stack",
    details: `Specialization: digital developement option full stack`,
  },
  {
    year: "2020 - 2021",
    degree: "Baccalaureate",
    institute: "Baccalaureate in Physical Sciences option french",
    details: ``,
  },
];

const Education: FC = (): JSX.Element => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
                {val.degree}
                <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

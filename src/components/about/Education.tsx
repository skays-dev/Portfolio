import Link from "next/link";
import React from "react";

const educationContent = [
  {
    year: "   2023 - Present",
    degree: "CERTIFICATE",
    institute: "ALX Software Engineering",
    details: `ALX is a leading technology training provider, built to accelerate the careers of young Africans through the technology and professional skills that enable them to thrive in the digital economy.`,
    link: "https://www.alxafrica.com/"
  },
  {
    year: "2021 - 2023",
    degree: "Technicien Specialise",
    institute: "ISTA Development digital option full stack",
    details: `Founded in 1974, OFPPT is a public training institution. It offers vocational training free of charge. The training is based on a demand-driven strategy meeting the qualification needs and requirements of the labor market. OFPPT has a large network of training centers all over Morocco. These centers provide acknowledged competencies at the service of business companies.`,
  },
  {
    year: "2020 - 2021",
    degree: "Baccalaureate",
    institute: "Baccalaureate in Physical Sciences",
    details: `Baccalaureate in Physical Sciences graduate with a solid foundation in physics and chemistry, complemented by hands-on laboratory experience. Skilled in critical thinking and problem-solving within the realm of physical sciences.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.link ? 
              <Link href={val.link} style={{ textDecoration: 'none' }} target="_blank">
                {val.degree}
                <span className="place open-sans-font">{val.institute}</span>
              </Link> :
              <>
                {val.degree}
                <span className="place open-sans-font">{val.institute}</span>
              </>
            }
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

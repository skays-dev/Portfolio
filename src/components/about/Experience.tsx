import Link from "next/link";
import { FC } from "react";

const experienceContent = [
  {
    year: "   2023",
    position: " Web Developer",
    compnayName: "Masterlys",
    details: `Thrived as a web development intern at Agency Masterlys, honing skills in front-end and back-end development during a 6-month internship. Actively contributed to website projects, fostering responsive and user-friendly designs.`,
    link: "https://masterlys.ma/"
  },
];

const Experience: FC = (): JSX.Element => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.link ?
              <Link href={val.link} style={{ textDecoration: 'none' }} target="_blank">
                {val.position}
                <span className="place open-sans-font">{val.compnayName}</span>
              </Link> :
              <>
                {val.position}
                <span className="place open-sans-font">{val.compnayName}</span>
              </>
            }
          </h5>          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

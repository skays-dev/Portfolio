import Link from "next/link";
import { FC } from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Aymane", hasColor: "" },
  { meta: "last name", metaInfo: "Taoufyq", hasColor: "" },
  { meta: "Age", metaInfo: "2 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Morocco", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Sale", hasColor: "" },
  { meta: "phone", metaInfo: "+212 659295575", hasColor: "", link: "tel: +212659295575" },
  { meta: "Email", metaInfo: "taoufyq.ayman@gmail.com", hasColor: "", link: "mailto:taoufyq.ayman@gmail.com" },
  { meta: "Linkedin", metaInfo: " Aymane Taoufyq", hasColor: "", link: "https://www.linkedin.com/in/aymane-taoufyq-4a91ab277/" },
  { meta: "Github", metaInfo: " skays-dev", hasColor: "", link: "https://github.com/skays-dev" },
  { meta: "langages", metaInfo: "English, Arabic, French", hasColor: "" },
];

const PersonalInfo: FC = (): JSX.Element => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          {val.link?
            <Link href={val.link || ""} target="_blank">
              <span
                className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
              >
                {val.metaInfo}
              </span>
            </Link> :
            <span
              className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
            >
              {val.metaInfo}
            </span>
          }

        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

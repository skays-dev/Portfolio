import { FC } from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/skays.dev/",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/skays.dev/" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/aymane-taoufyq-4a91ab277/",
  },
  { iconName: "fa fa-github", link: "https://github.com/skays-dev" },
];

const Social: FC = (): JSX.Element => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

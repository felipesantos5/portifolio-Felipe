import { Link } from "react-router-dom";
import LanguageButton from "../languageButton/languageButton";
import { DarkmodeButton } from "../darkbutton/darkbutton";
import { useTranslation } from "react-i18next";
import { MouseEventHandler } from "react";

interface navProps {
  func?: MouseEventHandler<HTMLAnchorElement>;
}

export const Nav = ({ func }: navProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/personal" onClick={func}>
        {t("header.whoAmI")}
      </Link>
      <Link to="/skills" onClick={func}>
        {t("header.habilities")}
      </Link>
      <Link to="/projects" onClick={func}>
        {t("header.projects")}
      </Link>
      <Link to="/contact" onClick={func}>
        {t("header.contact")}
      </Link>
      <DarkmodeButton />
      <LanguageButton />
    </>
  );
};

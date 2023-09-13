import { Link } from "react-router-dom";
import logo from "/logoIcon.png";
import { DarkmodeButton } from "../darkbutton/darkbutton";
import LanguageButton from "../languageButton/languageButton";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gray-200 dark:bg-zinc-900">
      <section className="flex justify-between items-center py-4 m-auto max-w-7xl ">
        <img src={logo} alt="logo" className="w-24" />
        <div className="flex gap-10">
          <nav className="flex items-center gap-6 text-xl font-semibold text-black dark:text-white">
            <Link to="/personal">{t("header.whoAmI")}</Link>
            <Link to="/skills">{t("header.habilities")}</Link>
            <Link to="/projects">{t("header.projects")}</Link>
            <Link to="/contact">{t("header.contact")}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <DarkmodeButton />
            <div>
              <div className="border border-black dark:border-white"></div>
            </div>
            <LanguageButton />
          </div>
        </div>
      </section>
    </header>
  );
};

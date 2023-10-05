import { Link } from "react-router-dom";
import LanguageButton from "../languageButton/languageButton";
import { DarkmodeButton } from "../darkbutton/darkbutton";
import { useTranslation } from "react-i18next";
import { MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface navProps {
  func?: MouseEventHandler<HTMLAnchorElement>;
}

export const Nav = ({ func }: navProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/personal" onClick={func}>
        <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {t("header.whoAmI")}
        </motion.p>
      </Link>
      <Link to="/skills" onClick={func}>
        <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {t("header.habilities")}
        </motion.p>
      </Link>
      <Link to="/projects" onClick={func}>
        <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {t("header.projects")}
        </motion.p>
      </Link>
      <Link to="/contact" onClick={func}>
        <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          {t("header.contact")}
        </motion.p>
      </Link>
      <DarkmodeButton />
      <LanguageButton />
    </>
  );
};

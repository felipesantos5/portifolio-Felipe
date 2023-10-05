import { SiGoogletranslate } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { motion } from "framer-motion";

function LanguageButton() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    // Recupera a preferência de idioma do localStorage quando o componente é montado
    const storedLanguage = localStorage.getItem("preferredLanguage");
    if (storedLanguage) {
      changeLanguage(storedLanguage); // Atualize o idioma do i18n com base no localStorage
    }
  }, [changeLanguage]);

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleChangeLanguage}>
      <SiGoogletranslate size="1.7rem" className="text-black dark:text-white" />
    </motion.button>
  );
}

export default LanguageButton;

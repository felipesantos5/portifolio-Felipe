import { SiGoogletranslate } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function LanguageButton() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  }, [changeLanguage]);

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  return <SiGoogletranslate size="1.7rem" className="text-black dark:text-white cursor-pointer" onClick={handleChangeLanguage} />;
}

export default LanguageButton;

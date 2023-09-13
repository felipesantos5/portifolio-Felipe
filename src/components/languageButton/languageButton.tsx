import { SiGoogletranslate } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageButton() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage == "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <button onClick={handleChangeLanguage}>
      <SiGoogletranslate size="1.7rem" />
    </button>
  );
}

export default LanguageButton;

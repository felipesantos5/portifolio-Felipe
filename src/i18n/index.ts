import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranlations from "./locales/en/en.json";
import ptTranlations from "./locales/pt/pt.json";

const storedLanguage = localStorage.getItem("preferredLanguage");

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enTranlations },
    pt: { ...ptTranlations },
  },
  lng: storedLanguage || "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        hero: "Create conditions for all individuals to reach their full potential.",
      },
    },
    se: {
      translation: {
        hero: "Skapa förutsättningar för alla individer att nå sin fulla potential.",
      },
    },
  },
});

export default i18n;

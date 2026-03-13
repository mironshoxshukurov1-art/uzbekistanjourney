import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslations from "/public/localization/english/global.json";
import uzbekTranslations from "/public/localization/uzbek/global.json";

const resources = {
  en: {
    translation: englishTranslations
  },
  uz: {
    translation: uzbekTranslations
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;
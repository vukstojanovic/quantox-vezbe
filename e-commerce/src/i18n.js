
import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_SR from './translations/sr/translations.json';
import TRANSLATIONS_EN from './translations/en/translations.json';

console.log(TRANSLATIONS_EN);

i18n.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: { translation: TRANSLATIONS_EN },
    sr: { translation: TRANSLATIONS_SR }
  }
});

export default i18n;

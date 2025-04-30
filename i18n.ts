import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './src/locales/en/translation.json';
import frTranslation from './src/locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    detection: {
      order: ['navigator'],  
      caches: [],            
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
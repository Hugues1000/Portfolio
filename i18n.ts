import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './src/locales/en/translation.json';
import frTranslation from './src/locales/fr/translation.json';
import esTranslation from './src/locales/es/translation.json';
import deTranslation from './src/locales/de/translation.json';
import itTranslation from './src/locales/it/translation.json';
import ptTranslation from './src/locales/pt/translation.json';
import nlTranslation from './src/locales/nl/translation.json';
import plTranslation from './src/locales/pl/translation.json';
import zhTranslation from './src/locales/zh/translation.json';
import jaTranslation from './src/locales/ja/translation.json';
import arTranslation from './src/locales/ar/translation.json';
import fiTranslation from './src/locales/fi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
      it: { translation: itTranslation },
      pt: { translation: ptTranslation },
      nl: { translation: nlTranslation },
      pl: { translation: plTranslation },
      zh: { translation: zhTranslation },
      ja: { translation: jaTranslation },
      ar: { translation: arTranslation },
      fi: { translation: fiTranslation },
    },
    detection: {
      order: ['navigator'],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

  // Test different languages
  /*if (typeof window !== 'undefined') {
    (window as any).i18n = i18n;
  }*/
export default i18n;
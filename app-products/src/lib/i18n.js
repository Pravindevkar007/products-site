import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing the translation files
import enTranslation from '@/translations/en/en.json';
import mrTranslation from '@/translations/mr/mr.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslation },
      mr: { translation: mrTranslation },
    },
    lng: 'en',
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

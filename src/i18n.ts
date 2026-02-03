import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import heTranslations from './locales/he.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      he: {
        translation: heTranslations,
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Update HTML dir attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  localStorage.setItem('language', lng);
});

// Set initial direction
document.documentElement.dir = savedLanguage === 'he' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

export default i18n;

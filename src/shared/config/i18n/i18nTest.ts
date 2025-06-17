import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',

    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    resources: { en: { translationsNS: {} } },
  });

export default i18n;
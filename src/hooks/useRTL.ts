import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  useEffect(() => {
    const html = document.documentElement;
    html.dir = isRTL ? 'rtl' : 'ltr';
    html.lang = i18n.language;
  }, [isRTL, i18n.language]);

  return { isRTL, language: i18n.language };
};

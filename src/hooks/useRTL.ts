import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  return { isRTL, language: i18n.language };
};

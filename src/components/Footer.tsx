import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-dark-bg border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-dark-muted text-sm">
          <span>{t('footer.built')}</span> ❤️ <span>{t('footer.and')}</span> ☕
          <span className="mx-2">|</span>
          © 2025 Hen Benoish. <span>{t('footer.rights')}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

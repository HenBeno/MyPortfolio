import { useTranslation } from 'react-i18next';
import { Code2, Zap, Layers } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const stack = [
    { name: 'React', icon: Code2 },
    { name: 'Vite', icon: Zap },
    { name: 'Tailwind', icon: Layers },
  ];

  return (
    <footer className="py-8 bg-dark-bg border-t border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <span className="text-dark-muted text-sm">{t('footer.built')}</span>
          <div className="flex items-center gap-3">
            {stack.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-card border border-dark-border text-dark-muted text-xs font-medium hover:border-primary/40 hover:text-primary transition-colors"
                title={name}
              >
                <Icon size={14} />
                {name}
              </span>
            ))}
          </div>
          <span className="text-dark-muted">❤️ <span>{t('footer.and')}</span> ☕</span>
        </div>
        <p className="text-center text-dark-muted text-sm">
          © 2025 Hen Benoish. <span>{t('footer.rights')}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

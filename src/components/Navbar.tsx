import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Languages } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'he' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-surface/80 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-2xl font-bold text-primary hover:text-primary-light transition-colors font-mono"
          >
            HB
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-dark-text hover:text-primary transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-dark-text hover:text-primary hover:bg-dark-surface/50 transition-colors font-medium"
              aria-label={i18n.language === 'en' ? 'Switch to Hebrew' : 'החלף לאנגלית'}
              title={i18n.language === 'en' ? 'עברית' : 'English'}
            >
              <Languages size={20} />
              <span>{i18n.language === 'en' ? 'עב' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-dark-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-3 text-dark-text hover:text-primary transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full py-3 text-dark-text hover:text-primary transition-colors font-medium"
              aria-label={i18n.language === 'en' ? 'Switch to Hebrew' : 'החלף לאנגלית'}
            >
              <Languages size={20} />
              <span>{i18n.language === 'en' ? 'עברית' : 'English'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

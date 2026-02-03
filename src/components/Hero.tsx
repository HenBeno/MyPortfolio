import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Code, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState('');
  const fullText = t('hero.subtitle');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { key: 'title1', icon: Code },
    { key: 'title2', icon: Zap },
    { key: 'title3', icon: Brain },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg pt-16 md:pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, #00D9FF 1px, transparent 1px), linear-gradient(180deg, #00D9FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 md:w-64 lg:w-80"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform scale-110"></div>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
                alt="Hen Benoish"
                className="relative w-full h-auto rounded-full border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="text-center flex-1">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-lg md:text-xl mb-4 font-mono"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-text mb-6"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Role Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <span
                  key={badge.key}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-card border border-primary/30 rounded-full text-primary text-sm md:text-base font-medium hover:border-primary hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all"
                >
                  <Icon size={18} />
                  <span>{t(`hero.${badge.key}`)}</span>
                </span>
              );
            })}
          </motion.div>

          {/* Subtitle with typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-dark-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto font-mono"
          >
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 md:mb-24"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] hover:scale-105"
            >
              {t('hero.cta1')}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              {t('hero.cta2')}
            </button>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-dark-muted hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="animate-bounce" size={24} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

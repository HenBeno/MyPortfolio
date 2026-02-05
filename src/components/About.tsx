import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, BookOpen, Lightbulb } from 'lucide-react';
import { useRTL } from '../hooks/useRTL';

const About = () => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  const highlights = [
    { icon: User, key: 'highlight1' },
    { icon: BookOpen, key: 'highlight2' },
    { icon: Lightbulb, key: 'highlight3' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-dark-text mb-4 text-center"
        >
          {t('about.title')}
        </motion.h2>

        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl transform scale-105"></div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/AboutMe.png`}
                  alt="Hen Benoish"
                  className="relative w-full h-auto rounded-2xl border border-primary/20 shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6 text-dark-muted text-lg leading-relaxed"
            >
              <p>{t('about.intro')}</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-text">
                  {t('about.techLeadTitle')}
                </h3>
                <p>{t('about.techLeadIntro')}</p>
                <ul className="list-disc list-outside ps-6 space-y-2 rtl:ps-0 rtl:pe-6">
                  <li>{t('about.techLeadPoint1')}</li>
                  <li>{t('about.techLeadPoint2')}</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-text">
                  {t('about.engineeringTitle')}
                </h3>
                <p>{t('about.engineeringIntro')}</p>
                <ul className="list-disc list-outside ps-6 space-y-2 rtl:ps-0 rtl:pe-6">
                  <li>{t('about.engineeringPoint1')}</li>
                  <li>{t('about.engineeringPoint2')}</li>
                </ul>
              </div>

              <blockquote className="border-s-4 border-primary ps-4 py-2 italic text-dark-text rtl:border-s-0 rtl:border-e-4 rtl:ps-0 rtl:pe-4">
                "{t('about.quote')}"
              </blockquote>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-primary/50 transition-all text-center"
                >
                  <Icon className="mx-auto mb-4 text-primary" size={32} />
                  <p className="text-dark-text font-medium">
                    {t(`about.${highlight.key}`)}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

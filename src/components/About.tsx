import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: User, text: 'Automation Infrastructure Developer' },
    { icon: BookOpen, text: 'Udemy Addict' },
    { icon: Lightbulb, text: 'Gadget Enthusiast' },
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
              initial={{ opacity: 0, x: -50 }}
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
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
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
                  <p className="text-dark-text font-medium">{highlight.text}</p>
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

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: User, text: 'Practical Software Engineer' },
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

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-dark-muted text-lg leading-relaxed"
          >
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </motion.div>

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

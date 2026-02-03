import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      key: 'leumi',
      isCurrent: true,
    },
    {
      key: 'intelLead',
      isCurrent: false,
    },
    {
      key: 'intelDev',
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-dark-text mb-16 text-center"
        >
          {t('experience.title')}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div 
              className="absolute top-0 bottom-0 left-8 w-0.5 bg-primary/30"
            />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={exp.key} className="relative mb-12 pl-20">
                {/* Timeline Marker */}
                <div className="absolute top-2 left-0 w-16 h-16 rounded-full bg-dark-card border-4 border-primary flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary/50 transition-all"
                >
                  {exp.isCurrent && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        {t('experience.current')}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-dark-text mb-2">
                    {t(`experience.${exp.key}.title`)}
                  </h3>
                  <h4 className="text-xl text-primary mb-3">
                    {t(`experience.${exp.key}.company`)}
                  </h4>
                  <div className="flex items-center gap-2 text-dark-muted mb-4">
                    <Calendar size={16} />
                    <span>{t(`experience.${exp.key}.period`)}</span>
                  </div>
                  <p className="text-dark-muted leading-relaxed">
                    {t(`experience.${exp.key}.description`)}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      name: t('contact.linkedin'),
      url: 'https://www.linkedin.com/in/hen-benoish/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: t('contact.github'),
      url: 'https://github.com/HenBeno',
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: t('contact.email'),
      url: 'mailto:HenBenHen@gmail.com',
      icon: Mail,
      color: 'hover:text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-dark-text mb-4 text-center"
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-dark-muted text-center mb-4 text-lg"
        >
          {t('contact.subtitle')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary text-center mb-12 font-medium"
        >
          {t('contact.message')}
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex flex-col items-center gap-3 p-6 bg-dark-card border border-dark-border rounded-lg hover:border-primary/50 transition-all group ${link.color}`}
                >
                  <Icon size={32} className="text-dark-muted group-hover:scale-110 transition-transform" />
                  <span className="text-dark-text font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="/assets/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-3 w-full md:w-auto mx-auto px-8 py-4 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] hover:scale-105"
          >
            <Download size={20} />
            {t('contact.downloadResume')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

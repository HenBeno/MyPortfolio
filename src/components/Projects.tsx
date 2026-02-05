import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/HenBeno/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-dark-text mb-16 text-center"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Featured: GherkinMate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-card border-2 border-primary/50 rounded-lg p-8 hover:border-primary hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text mb-2">
                      {t('projects.gherkinMate.title')}
                    </h3>
                    <span className="text-primary text-sm font-mono">{t('projects.gherkinMate.year')}</span>
                  </div>
                  <Code2 className="text-primary" size={32} />
                </div>
                <p className="text-dark-muted mb-4 leading-relaxed">
                  {t('projects.gherkinMate.description')}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-dark-muted">{t('projects.gherkinMate.tech')}</span>
                </div>
                <a
                  href="https://www.linkedin.com/posts/hen-benoish_%D7%91%D7%AA%D7%95%D7%A8-%D7%9E%D7%A4%D7%AA%D7%97-%D7%AA%D7%A9%D7%AA%D7%99%D7%95%D7%AA-%D7%90%D7%95%D7%98%D7%95%D7%9E%D7%A6%D7%99%D7%94-%D7%A9%D7%9E%D7%90%D7%9E%D7%A5-%D7%A7%D7%99%D7%93%D7%9E%D7%94-%D7%95%D7%98%D7%9B%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94-activity-7419030890095243266-W0zX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADNQ8vUBZEUk_SfvFR008caBHeECiUHI-zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                >
                  {t('projects.gherkinMate.link')}
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl transform scale-105"></div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/images/gherkinmate.png`}
                  alt="GherkinMate Project"
                  className="relative w-full h-auto rounded-lg border border-primary/20 shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* GitHub Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-card border border-dark-border rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-dark-text flex items-center gap-2">
                <Github size={24} className="text-primary" />
                {t('projects.github.title')}
              </h3>
              <a
                href="https://github.com/HenBeno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors text-sm font-medium"
              >
                {t('projects.github.link')} →
              </a>
            </div>
            <p className="text-dark-muted mb-6">{t('projects.github.description')}</p>

            {loading ? (
              <div className="text-center py-8 text-dark-muted">{t('projects.loading')}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.slice(0, 4).map((repo, index) => (
                  <motion.a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="block p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-primary/50 hover:bg-dark-surface transition-all"
                  >
                    <h4 className="text-dark-text font-semibold mb-2 flex items-center gap-2">
                      {repo.name}
                      <ExternalLink size={14} className="text-dark-muted" />
                    </h4>
                    <p className="text-dark-muted text-sm mb-3 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-dark-muted">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <Code2 size={12} />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span>⭐ {repo.stargazers_count}</span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

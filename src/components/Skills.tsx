import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2,
  TestTube,
  Server,
  Brain,
  Coffee,
  GitBranch,
  Sparkles,
  PlayCircle,
  Workflow,
  Smartphone,
  Globe,
  FileText,
  Database,
  Eye,
  Zap,
} from 'lucide-react';
import TechLogosStrip from './TechLogosStrip';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: 'languages',
      icon: Code2,
      color: 'text-blue-400',
      skills: [
        { name: 'Java', icon: Coffee },
        { name: 'Python', icon: Code2 },
        { name: 'TypeScript', icon: Code2 },
        { name: 'C#', icon: Code2 },
      ],
    },
    {
      key: 'mobile',
      icon: Smartphone,
      color: 'text-green-400',
      skills: [
        { name: 'Appium', icon: Smartphone },
        { name: 'UiAutomator2', icon: Smartphone },
        { name: 'Perfecto Mobile', icon: Smartphone },
        { name: 'iOS', icon: Smartphone },
        { name: 'Android', icon: Smartphone },
        { name: 'XCUITest', icon: Smartphone },
      ],
    },
    {
      key: 'web',
      icon: Globe,
      color: 'text-cyan-400',
      skills: [
        { name: 'Selenium', icon: TestTube },
        { name: 'WebdriverIO', icon: TestTube },
        { name: 'Playwright', icon: PlayCircle },
      ],
    },
    {
      key: 'bdd',
      icon: FileText,
      color: 'text-yellow-400',
      skills: [
        { name: 'Cucumber', icon: FileText },
        { name: 'Gherkin', icon: FileText },
        { name: 'BDD Practices', icon: FileText },
      ],
    },
    {
      key: 'backend',
      icon: Database,
      color: 'text-purple-400',
      skills: [
        { name: 'REST API', icon: Database },
        { name: 'Proxy/Apigee', icon: Server },
        { name: 'Swagger/OpenAPI', icon: FileText },
        { name: 'Kibana', icon: Database },
      ],
    },
    {
      key: 'devops',
      icon: Server,
      color: 'text-orange-400',
      skills: [
        { name: 'Maven', icon: Workflow },
        { name: 'Jenkins', icon: Workflow },
        { name: 'Azure DevOps', icon: GitBranch },
        { name: 'AWS', icon: Server },
        { name: 'ReportPortal', icon: Server },
        { name: 'Git/Bitbucket', icon: GitBranch },
      ],
    },
    {
      key: 'emerging',
      icon: Brain,
      color: 'text-pink-400',
      skills: [
        { name: 'AI + Automation', icon: Sparkles },
        { name: 'Amazon Q', icon: Brain },
        { name: 'Playwright', icon: PlayCircle },
        { name: 'Robot Framework', icon: Zap },
        { name: 'Visual Validation', icon: Eye },
        { name: 'React Native', icon: Smartphone },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-dark-text mb-4 text-center"
        >
          {t('skills.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-dark-muted text-center mb-8 text-lg"
        >
          {t('skills.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14"
        >
          <TechLogosStrip title={t('skills.toolsStrip')} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className={category.color} size={24} />
                  <h3 className="text-xl font-bold text-dark-text">
                    {t(`skills.${category.key}`)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-dark-text hover:border-primary hover:text-primary transition-all"
                      >
                        <SkillIcon size={16} />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

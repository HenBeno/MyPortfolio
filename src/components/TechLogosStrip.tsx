import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, FileCode, GitBranch } from 'lucide-react';

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';

type LogoItem = {
  name: string;
  slug: string;
  hex: string;
  href: string;
  title?: string;
  fallback?: React.ComponentType<{ className?: string }>;
};

/** Dev / Automation tools – order: languages → frameworks/tools → DevOps/infrastructure */
const logos: LogoItem[] = [
  // שפות תכנות (Programming languages)
  { name: 'Java', slug: 'openjdk', hex: 'ED8B00', href: 'https://www.oracle.com/java/' },
  { name: 'Python', slug: 'python', hex: '3776AB', href: 'https://www.python.org/' },
  { name: 'TypeScript', slug: 'typescript', hex: '3178C6', href: 'https://www.typescriptlang.org/' },
  // פריימוורקים / כלי אוטומציה (Frameworks / automation tools)
  { name: 'Selenium', slug: 'selenium', hex: '43B02A', href: 'https://www.selenium.dev/' },
  { name: 'Playwright', slug: 'playwright', hex: '2EAD33', href: 'https://playwright.dev/', fallback: PlayCircle },
  { name: 'Cucumber', slug: 'cucumber', hex: '23D96C', href: 'https://cucumber.io/', fallback: FileCode },
  // DevOps / תשתית (DevOps / infrastructure)
  { name: 'Jenkins', slug: 'jenkins', hex: 'D24939', href: 'https://www.jenkins.io/' },
  { name: 'AZDO', slug: 'azuredevops', hex: '0078D4', href: 'https://azure.microsoft.com/products/devops', title: 'Azure DevOps', fallback: GitBranch },
  { name: 'Docker', slug: 'docker', hex: '2496ED', href: 'https://www.docker.com/' },
  { name: 'Git', slug: 'git', hex: 'F05032', href: 'https://git-scm.com/' },
  { name: 'Bitbucket', slug: 'bitbucket', hex: '0052CC', href: 'https://bitbucket.org/' },
];

interface TechLogosStripProps {
  className?: string;
  title?: string;
  animated?: boolean;
}

const TechLogosStrip = ({ className = '', title, animated = true }: TechLogosStripProps) => {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
      {title && (
        <p className="text-dark-muted text-sm font-medium tracking-wide">
          {title}
        </p>
      )}
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6">
        {logos.map((logo, i) => {
          const useFallback = failed[logo.name];
          const FallbackIcon = logo.fallback;
          return (
            <motion.a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={animated ? { opacity: 0, y: 8 } : undefined}
              whileInView={animated ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2.5 group"
              title={logo.title ?? logo.name}
            >
              <span
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-dark-card border border-dark-border group-hover:border-primary/40 transition-colors p-2 overflow-hidden"
                style={useFallback && FallbackIcon ? { color: `#${logo.hex}` } : undefined}
              >
                {useFallback && FallbackIcon ? (
                  <FallbackIcon className="w-6 h-6 md:w-7 md:h-7" />
                ) : (
                  <img
                    src={`${SIMPLE_ICONS_CDN}/${logo.slug}/${logo.hex}`}
                    alt={logo.name}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={() => setFailed((prev) => ({ ...prev, [logo.name]: true }))}
                  />
                )}
              </span>
              <span className="text-xs text-dark-muted group-hover:text-primary transition-colors font-medium">
                {logo.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default TechLogosStrip;

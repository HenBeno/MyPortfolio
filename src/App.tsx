import { useEffect, lazy, Suspense } from 'react';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Apply dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text ltr">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

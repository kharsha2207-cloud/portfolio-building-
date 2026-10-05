import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LearningJourney } from './components/LearningJourney';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { portfolio } from './data/portfolio';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-10% 0px -45% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900 antialiased">
      <Navbar items={navItems} activeSection={activeSection} />
      <main>
        <Hero profile={portfolio} links={portfolio.links} />
        <About profile={portfolio} />
        <Skills skillGroups={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Certifications items={portfolio.certifications} />
        <LearningJourney steps={portfolio.learningJourney} />
        <Contact links={portfolio.links} />
      </main>
      <Footer links={portfolio.links} />
    </div>
  );
}

export default App;

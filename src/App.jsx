import { useEffect } from 'react';
import useTheme from './hooks/useTheme';
import StarsCanvas from './components/StarsCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  useEffect(() => {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    const onScroll = () => {
      btn.classList.toggle('show', window.scrollY > 400);
    };
    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', onScroll);
    btn.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      btn.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <button
      id="scrollTop"
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white border-none text-lg cursor-pointer z-[999] opacity-0 invisible translate-y-5 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-2xl"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}

function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const onMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    if ('ontouchstart' in window) glow.style.display = 'none';

    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}

function MagneticButtons() {
  useEffect(() => {
    const els = document.querySelectorAll('.btn-primary, .btn-outline, .btn-small, .social-icon, .project-link');
    const onMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };
    const onLeave = (e) => {
      e.currentTarget.style.transform = '';
    };

    els.forEach(el => {
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      els.forEach(el => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}

function SparkleTrail() {
  useEffect(() => {
    let throttle = false;
    const onMove = (e) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => throttle = false, 40);

      const dot = document.createElement('div');
      dot.className = 'sparkle-dot';
      const angle = Math.random() * 360;
      const dist = 15 + Math.random() * 20;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      dot.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      dot.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      dot.style.background = ['#6c63ff', '#ff6b9d', '#00d4ff', '#fff'][Math.floor(Math.random() * 4)];
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 700);
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const isTouch = 'ontouchstart' in window;

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      const canvas = document.getElementById('stars-canvas');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}
      style={{
        '--bg': theme === 'dark' ? '#0a0a1a' : '#f0f0f8',
        '--text': theme === 'dark' ? '#e8e8f0' : '#1a1a2e',
        '--text-muted': theme === 'dark' ? '#8888bb' : '#6666aa',
        '--border': theme === 'dark' ? '#2a2a50' : '#d0d0e8',
        '--surface': theme === 'dark' ? '#1a1a3e' : '#ffffff',
        '--card-bg': theme === 'dark' ? 'rgba(26, 26, 62, 0.6)' : 'rgba(255, 255, 255, 0.7)',
        '--glow': theme === 'dark' ? 'rgba(108, 99, 255, 0.15)' : 'rgba(108, 99, 255, 0.1)',
        background: 'var(--bg)',
        color: 'var(--text)',
        transition: 'background 0.4s ease, color 0.4s ease',
      }}
    >
      <StarsCanvas />
      {!isTouch && <div id="cursor-glow" style={{ background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)` }} />}

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      {/* <Stats /> */}
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
      <ScrollToTop />

      {!isTouch && <CursorGlow />}
      {!isTouch && <MagneticButtons />}
      {!isTouch && <SparkleTrail />}
    </div>
  );
}

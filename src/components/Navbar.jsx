import { useState, useEffect } from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  // { href: '#stats', label: 'Stats' },

  { href: '#experience', label: 'Work Experience' },
  { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          current = section.getAttribute('id');
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-[5%] py-4 z-50 border-b border-[var(--border)] backdrop-blur-lg transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : ''
      }`}
      style={{
        background: theme === 'dark'
          ? 'rgba(10, 10, 26, 0.85)'
          : 'rgba(240, 240, 248, 0.85)',
      }}
    >
      <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none">
        RI
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                active === link.href.slice(1)
                  ? 'text-primary font-bold'
                  : 'text-[#8888bb] hover:text-[#e8e8f0]'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded transition-all duration-300 ${
                  active === link.href.slice(1) ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center cursor-pointer text-base border transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.15)]"
          style={{
            background: theme === 'dark' ? '#1a1a3e' : '#ffffff',
            borderColor: theme === 'dark' ? '#2a2a50' : '#d0d0e8',
            color: theme === 'dark' ? '#e8e8f0' : '#1a1a2e',
          }}
          aria-label="Toggle theme"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} />
        </button>

        <button
          className={`md:hidden flex flex-col gap-[5px] cursor-pointer p-1 ${
            open ? 'active' : ''
          }`}
          onClick={() => setOpen(prev => !prev)}
          aria-label="Menu"
        >
          <span className={`w-[26px] h-[2.5px] bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`w-[26px] h-[2.5px] bg-current rounded transition-all duration-300 ${open ? 'opacity-0 -translate-x-2' : ''}`} />
          <span className={`w-[26px] h-[2.5px] bg-current rounded transition-all duration-300 ${open ? '-rotate-45 translate-y-[-5px]' : ''}`} />
        </button>
      </div>

      <div
        className={`fixed top-16 left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto flex-col items-center gap-5 py-8 text-center backdrop-blur-xl border-b transition-all duration-300 md:hidden ${
          open ? 'flex opacity-100 translate-y-0' : 'flex opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{
          background: theme === 'dark'
            ? 'rgba(10, 10, 26, 0.95)'
            : 'rgba(240, 240, 248, 0.95)',
          borderColor: theme === 'dark' ? '#2a2a50' : '#d0d0e8',
        }}
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-sm font-medium transition-colors ${
              active === link.href.slice(1)
                ? 'text-primary'
                : 'text-[#8888bb]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

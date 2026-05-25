import { useEffect, useRef } from 'react';

export default function Hero() {
  const badgeRef = useRef(null);

useEffect(() => {
  const badge = badgeRef.current;
  if (!badge) return;

  const text = 'Frontend-focused Full-Stack Developer';

  badge.textContent = '';

  let i = 0;
  let timeout;

  function type() {
    if (i < text.length) {
      badge.textContent += text.charAt(i);
      i++;
      timeout = setTimeout(type, 30 + Math.random() * 20);
    }
  }

  timeout = setTimeout(type, 500);

  return () => clearTimeout(timeout);
}, []);

  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex items-center justify-center text-center pt-20 max-w-[750px] mx-auto px-[5%]"
    >
      <div className="max-w-[750px]">
        <span
          ref={badgeRef}
          className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-primary mb-6 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,107,157,0.15))',
            border: '1px solid rgba(108,99,255,0.3)',
          }}
        >
          Frontend-focused Full-Stack Developer
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-5 animate-[fadeInUp_0.6s_ease_0.1s_both]">
          Rawan{' '}
          <span className="gradient-text">Ibrahim</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#8888bb] mb-8 max-w-[550px] mx-auto animate-[fadeInUp_0.6s_ease_0.2s_both]">
          Frontend-focused Full-Stack Developer with 3+ years of turning complex
          problems into elegant, user-centered digital experiences.
          <span className="inline-block ml-0.5 animate-blink text-primary text-lg font-thin">|</span>
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-[fadeInUp_0.6s_ease_0.3s_both]">
          <a href="#projects" className="btn-primary animate-glow-pulse">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-5 animate-[fadeInUp_0.6s_ease_0.4s_both]">
          {[
            { href: 'https://github.com/rawanIbrahim-59', icon: 'fab fa-github', delay: '0s' },
            { href: 'https://www.linkedin.com/in/rawan-h-ibrahim', icon: 'fab fa-linkedin-in', delay: '0.5s' },
            // { href: 'https://twitter.com/sarachen_codes', icon: 'fab fa-twitter', delay: '1s' },
          ].map(social => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ animationDelay: social.delay }}
              aria-label={social.icon}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

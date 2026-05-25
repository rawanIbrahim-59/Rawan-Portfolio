import { useEffect, useRef } from 'react';

const stats = [
  { icon: 'fa-rocket', target: 3, label: '+ Years Experience', desc: 'Shipping code since 2022' },
  { icon: 'fa-code', target: 20, label: '+ Technologies', desc: 'Front-end, back-end & cloud' },
  { icon: 'fa-project-diagram', target: 25, label: '+ Projects Delivered', desc: 'From MVPs to enterprise scale' },
  { icon: 'fa-user-tie', target: 12, label: '+ Happy Clients', desc: 'Long-term partnerships built' },
];

function StatCard({ icon, target, label, desc, index }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current;
          }, 40);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      className="stat-card"
      style={{
        animationDelay: `${index * 0.08}s`,
        '--delay': `${index * 0.08}s`,
      }}
    >
      <div className="stat-icon">
        <i className={`fas ${icon}`} />
      </div>
      <span ref={numRef} className="stat-number" data-target={target}>
        0
      </span>
      <span className="stat-label">{label}</span>
      <p className="stat-desc">{desc}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="section-container">
      <h2 className="section-title">By the Numbers</h2>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
}

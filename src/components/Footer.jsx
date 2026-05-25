import { useState, useEffect } from 'react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    fetch('./timestamp.json')
      .then(r => r.json())
      .then(data => setLastUpdate(data.date + ' ' + data.time))
      .catch(() => {
        const d = new Date(document.lastModified);
        setLastUpdate(
          d.toLocaleDateString() + ' ' +
          d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        );
      });
  }, []);

  return (
    <footer className="relative z-[1] text-center py-10 text-[#8888bb] text-sm border-t border-[var(--border)]">
      <p>
        &copy; {year} Rawan Ibrahim.
      </p>
      <p className="text-xs mt-1 opacity-60">
        Built with <i className="fas fa-heart text-secondary" /> and lots of coffee.
      </p>
    </footer>
  );
}

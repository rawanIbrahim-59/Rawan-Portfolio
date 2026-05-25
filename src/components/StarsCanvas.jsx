import { useEffect, useRef } from 'react';

export default function StarsCanvas() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H;
    const stars = starsRef.current;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const starCount = isTouch ? 150 : 400;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.2,
        dx: (Math.random() - 0.5) * 0.15,
        dy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * 2 * Math.PI,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let animId;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const isDark = document.documentElement.classList.contains('dark');

      stars.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;
        s.pulse += s.pulseSpeed;

        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        const alpha = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(108, 99, 255, ${alpha * 0.6})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    if (!isTouch) {
      function onMouseMove(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        stars.forEach((s, i) => {
          if (i < 100) {
            s.dx = x * 0.05;
            s.dy = y * 0.05;
          }
        });
      }
      document.addEventListener('mousemove', onMouseMove);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
        document.removeEventListener('mousemove', onMouseMove);
      };
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none touch-none z-0"
    />
  );
}

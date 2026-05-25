const FORM_ID = 'mwvznzkz';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(inp => {
      inp.style.borderColor = '';
      if (!inp.value.trim()) {
        inp.style.borderColor = '#ff6b6b';
        inp.style.animation = 'none';
        inp.offsetHeight;
        inp.style.animation = 'shake 0.4s ease';
        valid = false;
      }
    });
    if (!valid) return;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const btn = form.querySelector('button');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send');

      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #00c853, #00e676)';
      form.reset();
    } catch {
      btn.innerHTML = '<i class="fas fa-times"></i> Failed — Try Again';
      btn.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
    }

    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  };

  return (
    <section id="contact" className="section-container text-center">
      <h2 className="section-title">Get In Touch</h2>
      <p className="text-[#8888bb] mb-10 text-lg">
        Have a project in mind? Let's build something great together.
      </p>

      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit" className="btn-primary w-full justify-center">
            <i className="fas fa-paper-plane" /> Send Message
          </button>
        </form>

        <div className="contact-info">
          {[
            { icon: 'fas fa-envelope', title: 'Email', value: 'eng.rawan.hasanibrahim@gmail.com' },
            { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Syria' },
            { icon: 'fas fa-clock', title: 'Availability', value: 'Open to opportunities' },
          ].map(item => (
            <div key={item.title} className="contact-item">
              <i className={item.icon} />
              <div className="text-left">
                <h4 className="text-sm font-semibold mb-0.5">{item.title}</h4>
                <p className="text-sm text-[#8888bb]">{item.value}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-2">
            {[
              { href: 'https://github.com/rawanIbrahim-59', icon: 'fab fa-github' },
              { href: 'https://www.linkedin.com/in/rawan-h-ibrahim', icon: 'fab fa-linkedin-in' },
            ].map(social => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.icon}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

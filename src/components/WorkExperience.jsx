const experience = [
  {
    icon: 'fas fa-briefcase',
    company: 'aratech',
    location: 'UAE, Dubai (Remote)',
    role: 'Web Developer',
    period: 'Jun 2024 — Present',
    highlights: [],
  },
  {
    icon: 'fas fa-chalkboard-user',
    company: 'Be Up Center',
    location: 'Latakia, Syria',
    role: 'Web Development Instructor',
    period: 'Mar 2024 — Present',
    highlights: [],
  },
  {
    icon: 'fas fa-laptop-code',
    company: 'Freelance',
    location: 'UAE, Dubai (Remote)',
    role: 'Front-end Developer',
    period: 'Feb 2023 — Dec 2025',
    highlights: [],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <div
      className="exp-card"
      style={{
        '--delay': `${index * 0.15}s`,
      }}
    >
      <div className="exp-icon">
        <i className={exp.icon} />
      </div>
      <div className="exp-content">
        <div className="exp-header">
          <h3>{exp.role}</h3>
          <span className="exp-period">{exp.period}</span>
        </div>
        <div className="exp-meta">
          <span><i className="fas fa-building" /> {exp.company}</span>
          {exp.location && <span><i className="fas fa-map-pin" /> {exp.location}</span>}
        </div>
        {exp.highlights.length > 0 && (
          <ul className="exp-highlights">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

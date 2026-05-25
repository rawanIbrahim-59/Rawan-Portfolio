const education = [
  {
    icon: 'fas fa-graduation-cap',
    school: 'Tishreen University',
    location: 'Syria, Latakia',
    degree: "Bachelor's Degree in Informatics Engineering",
    field: 'Software Engineering',
    period: '2017 — 2023',
  },
];

function EducationCard({ edu, index }) {
  return (
    <div
      className="exp-card"
      style={{ '--delay': `${index * 0.15}s` }}
    >
      <div className="exp-icon">
        <i className={edu.icon} />
      </div>
      <div className="exp-content">
        <div className="exp-header">
          <h3>{edu.degree}</h3>
          <span className="exp-period">{edu.period}</span>
        </div>
        <div className="exp-meta">
          <span><i className="fas fa-building" /> {edu.school}</span>
          <span><i className="fas fa-map-pin" /> {edu.location}</span>
        </div>
        <p className="text-sm text-[#8888bb] mt-1">{edu.field}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="experience-timeline">
        {education.map((edu, i) => (
          <EducationCard key={edu.school} edu={edu} index={i} />
        ))}
      </div>
    </section>
  );
}

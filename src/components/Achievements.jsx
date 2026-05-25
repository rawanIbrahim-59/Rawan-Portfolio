import useTiltEffect from '../hooks/useTiltEffect';

const achievements = [
  {
    gradient: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    icon: 'fas fa-cloud',
    title: 'AWS Certified Developer — Associate',
    date: 'Jan 2026',
    desc: 'Earned the AWS Certified Developer credential, demonstrating proficiency in building, deploying, and debugging cloud applications using core AWS services.',
    meta: [
      { label: 'Issuer', value: 'Amazon Web Services' },
      { label: 'Credential ID', value: 'AWS-DEV-9X7K2M' },
    ],
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3'],
  },
  {
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: 'fab fa-google',
    title: 'Google UX Design Certificate',
    date: 'Sep 2025',
    desc: "Completed Google's intensive UX Design program, mastering user research, wireframing, prototyping, and usability testing through hands-on projects and real-world case studies.",
    meta: [
      { label: 'Issuer', value: 'Google via Coursera' },
      { label: 'Credential ID', value: 'G-UX-4RT6H8' },
    ],
    tags: ['UX Research', 'Wireframing', 'Figma', 'Prototyping'],
  },
  {
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: 'fab fa-facebook',
    title: 'Meta Front-End Developer Specialization',
    date: 'Mar 2025',
    desc: "Earned Meta's professional specialization in front-end development, covering React, component architecture, responsive design, and version control with Git.",
    meta: [
      { label: 'Issuer', value: 'Meta via Coursera' },
      { label: 'Credential ID', value: 'META-FE-2B5D9K' },
    ],
    tags: ['React', 'Responsive Design', 'Git', 'HTML/CSS'],
  },
];

function AchievementCard({ achievement, index }) {
  const tiltRef = useTiltEffect();

  return (
    <div
      ref={tiltRef}
      className="achievement-card"
      style={{
        animationDelay: `${index * 0.12}s`,
        '--delay': `${index * 0.12}s`,
      }}
    >
      <div
        className="achievement-img"
        style={{ background: achievement.gradient }}
      >
        <i className={achievement.icon} />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
          <h3 className="text-xl font-semibold">{achievement.title}</h3>
          <span className="achievement-date">{achievement.date}</span>
        </div>
        <p className="text-sm text-[#8888bb] mb-4 leading-relaxed">{achievement.desc}</p>
        <div className="flex flex-col gap-1 mb-4 text-sm text-[#8888bb]">
          {achievement.meta.map(m => (
            <span key={m.label}>
              <strong className="text-[#e8e8f0]">{m.label}:</strong> {m.value}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {achievement.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <a href="./sample-certificate.pdf" className="btn-small" target="_blank">
          <i className="fas fa-file-pdf" /> View Certificate
        </a>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <AchievementCard key={a.title} achievement={a} index={i} />
        ))}
      </div>
    </section>
  );
}

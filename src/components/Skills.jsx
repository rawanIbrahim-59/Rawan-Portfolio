import { useState } from 'react';

const skillData = {
  frontend: {
    label: 'Frontend',
    items: [
      { icon: 'fab fa-html5', name: 'HTML5' },
      { icon: 'fab fa-css3-alt', name: 'CSS3' },
      { icon: 'fab fa-js', name: 'JavaScript' },
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fas fa-file-code', name: 'TypeScript' },
      { icon: 'fab fa-react', name: 'Next.js' },
      { icon: 'fas fa-wand-magic-sparkles', name: 'Tailwind CSS' },
      { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    ],
  },
  backend: {
    label: 'Backend',
    items: [
      { icon: 'fab fa-php', name: 'PHP' },
      { icon: 'fab fa-laravel', name: 'Laravel' },
      { icon: 'fas fa-puzzle-piece', name: 'Strapi' },
      { icon: 'fas fa-cube', name: 'Directus' },
      { icon: 'fas fa-project-diagram', name: 'GraphQL' },
    ],
  },
  database: {
    label: 'Database',
    items: [
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-box-archive', name: 'SQLite' },
      { icon: 'fas fa-leaf', name: 'MongoDB' },
    ],
  },
  tools: {
    label: 'Tools',
    items: [
      { icon: 'fas fa-code', name: 'VS Code' },
      { icon: 'fab fa-git-alt', name: 'Git' },
      { icon: 'fab fa-github', name: 'GitHub' },
      { icon: 'fab fa-gitlab', name: 'GitLab' },
      { icon: 'fas fa-paper-plane', name: 'Postman' },
      { icon: 'fab fa-figma', name: 'Figma' },
      { icon: 'fas fa-chart-line', name: 'SEO' },
    ],
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills &amp; Technologies</h2>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {Object.entries(skillData).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`skill-tab ${activeTab === key ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillData[activeTab].items.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{
              animation: `fadeInUp 0.4s ease ${i * 0.06}s both`,
            }}
          >
            <i className={skill.icon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

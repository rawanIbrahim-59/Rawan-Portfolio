import { useState, useRef } from "react";
import useTiltEffect from "../hooks/useTiltEffect";

const projects = [
  {
    category: "top",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    icon: "fas fa-hard-hat",
    title: "GIFIS — Industrial Safety Website",
    desc: "An industrial safety platform built with Laravel, Strapi, and frontend technologies for managing safety protocols and equipment.",
    tags: ["Laravel", "Strapi", "PHP", "JavaScript"],
    links: [
      {
        href: "https://www.industrialsafetyinitiative.com/",
        icon: "fas fa-external-link-alt",
        label: "Live",
      },
    ],
  },
  {
    category: "top",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    icon: "fas fa-building",
    title: "Nia — Corporate Product & Brand Website",
    desc: "A corporate HVAC and home appliances website built with React, Tailwind CSS, and Strapi CMS.",
    tags: ["React", "Tailwind CSS", "Strapi"],
    links: [
      {
        href: "https://nia.me/",
        icon: "fas fa-external-link-alt",
        label: "Live",
      },
    ],
  },
  {
    category: "top",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    icon: "fas fa-university",
    title: "Almasraf — Banking Website",
    desc: "A banking web platform built with Laravel, PHP, Laravel Nova, and frontend technologies.",
    tags: ["Laravel", "PHP", "Laravel Nova", "HTML/CSS/JS"],
    links: [
      {
        href: "https://almasraf.aratech.co/",
        icon: "fas fa-external-link-alt",
        label: "Live",
      },
    ],
  },
  {
    category: "top",
    gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    icon: "fas fa-palette",
    title: "Re-imagined — Art Platform",
    desc: "A scalable art platform built with React and GraphQL powered by Directus, enabling flexible content management and efficient data querying.",
    tags: ["React", "GraphQL", "Directus"],
    // links: [
    //   { href: '#', icon: 'fas fa-external-link-alt', label: 'Live' },
    // ],
  },
  {
    category: "top",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    icon: "fas fa-dumbbell",
    title: "FiteZone",
    desc: "A fitness-themed website built with Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript"],
    links: [
      {
        href: "https://github.com/rawanIbrahim-59/FiteZone-Website",
        icon: "fab fa-github",
        label: "Code",
      },
    ],
  },
  {
    category: "more",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    icon: "fas fa-flower",
    title: "Flower-Shop",
    desc: "A flower shop website built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        href: "https://github.com/rawanIbrahim-59/Flower-Shop",
        icon: "fab fa-github",
        label: "Code",
      },
      {
        href: "https://flower-shop-puce-six.vercel.app/",
        icon: "fas fa-external-link-alt",
        label: "Live",
      },
    ],
  },
  // {
  //   category: "more",
  //   gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
  //   icon: "fas fa-language",
  //   title: "Learn-German",
  //   desc: "An educational website for learning German built with CSS, JS, and HTML.",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   links: [
  //     {
  //       href: "https://github.com/rawanIbrahim-59/Learn-German",
  //       icon: "fab fa-github",
  //       label: "Code",
  //     },
  //     {
  //       href: "https://learn-german-vert.vercel.app/",
  //       icon: "fas fa-external-link-alt",
  //       label: "Live",
  //     },
  //   ],
  // },
  {
    category: "more",
    gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    icon: "fas fa-tachometer-alt",
    title: "Dashboard Kit",
    desc: " Shows live KPIs (revenue, users, orders, conversion rate, tickets), a revenue bar chart, recent activity feed, sales-by-channel breakdown, and top products ranking.",
    tags: ["React", "TypeScript", "CSS"],
    links: [
      {
        href: "https://github.com/rawanIbrahim-59/Dashboard-Kit",
        icon: "fab fa-github",
        label: "Code",
      },
    ],
  },
  {
    category: "more",
    gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    icon: "fas fa-car",
    title: "DriftX",
    desc: "A website built with HTML, CSS, JS, and Laravel.",
    tags: ["HTML", "CSS", "JavaScript", "Laravel"],
    // links: [
    //   { href: '#', icon: 'fas fa-external-link-alt', label: 'Live' },
    // ],
  },
  {
    category: "more",
    gradient: "linear-gradient(135deg, #fddb92, #d1fdff)",
    icon: "fas fa-credit-card",
    title: "ATM Screens — ALIZZ Bank & OAB Bank",
    desc: "ATM interface screens designed and developed for ALIZZ Bank and OAB Bank using HTML, CSS, and JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [],
  },
  {
    category: "more",
    gradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    icon: "fas fa-envelope",
    title: "LEGOLAND® — Email Templates",
    desc: "Designed and developed responsive email templates for LEGOLAND® Dubai and LEGOLAND® Water Park, promoting LEGO®-themed attractions and events to families.",
    tags: ["HTML", "CSS", "Email Design"],
    links: [],
  },
];

function ProjectCard({ project, index }) {
  const tiltRef = useTiltEffect();
  const [leaving, setLeaving] = useState(false);

  return (
    <div
      ref={tiltRef}
      className={`project-card ${leaving ? "leaving" : ""}`}
      data-category={project.category}
      style={{
        animationDelay: `${(index % 5) * 0.08}s`,
        "--delay": `${(index % 5) * 0.08}s`,
      }}
    >
      <div className="project-img" style={{ background: project.gradient }}>
        <i className={project.icon} />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-[#8888bb] mb-4 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap">
          {(project.links || []).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className={link.icon} /> {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [leaving, setLeaving] = useState(false);

  const handleFilter = (newFilter) => {
    setLeaving(true);
    setTimeout(() => {
      setFilter(newFilter);
      setLeaving(false);
    }, 300);
  };

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {[
          { key: "all", label: "All" },
          { key: "top", label: "Top Projects" },
          { key: "more", label: "More Projects" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => handleFilter(btn.key)}
            className={`filter-btn ${filter === btn.key ? "active" : ""}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

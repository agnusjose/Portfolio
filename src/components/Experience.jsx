import "./Experience.css"

const experienceData = [
  {
    company: "ZKILLARC INNOVATIONS PVT. LTD.",
    position: "Web Developer Intern",
    location: "Kottayam, Kerala",
    duration: "March 2026 – May 2026",
    description: "Contributed to the development of the Camp Management Module for a sports management platform, building frontend and backend features that support camp administration, player assessments, approval workflows, and reporting processes.",
    achievements: [
      "Developed 6 role-based dashboards for players, coaches, head coaches, and sports authorities using React.js, Node.js, Express.js, and PostgreSQL.",
      "Implemented 20+ REST API endpoints supporting camp assignments, assessments, approvals, and reporting workflows.",
      "Collaborated in a 2-member Agile development team, resolving integration challenges and Git merge conflicts.",
      "Worked with PostgreSQL databases to manage application data and support backend operations."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Docker", "Git", "REST APIs"]
  },
  {
    company: "SPECTRUM SOFTTECH SOLUTIONS PVT. LTD.",
    position: "MERN Stack Intern",
    location: "Kochi, Kerala",
    duration: "June 2025",
    description: "Completed MERN stack training focused on frontend development, backend services and database integration through practical development exercises.",
    achievements: [
      "Developed React.js user interfaces and integrated them with backend services.",
      "Worked with Express.js and Node.js to build and test REST APIs.",
      "Used MongoDB for data storage and application data management.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"]
  }
];

function ExperienceCard({ exp }) {
  return (
    <div className="experience-card glass-card fade-up">
      <div className="experience-header">
        <div className="exp-title-section">
          <h3 className="company-name">{exp.company}</h3>
          <p className="position">{exp.position}</p>
        </div>
        <div className="exp-meta">
          <span className="duration">{exp.duration}</span>
          <span className="location">📍 {exp.location}</span>
        </div>
      </div>

      <p className="exp-description">{exp.description}</p>

      <div className="achievements-section">
        <h4>Key Contributions</h4>
        <ul className="achievements-list">
          {exp.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="tech-stack">
        {exp.technologies.map(tech => (
          <span key={tech} className="tech-label">{tech}</span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <span className="section-tag">Professional Journey</span>
        <h2>Work Experience</h2>
        <p className="section-subtitle">Building enterprise-grade applications through hands-on internship experience</p>

        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

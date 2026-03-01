import "./Skills.css"

function SkillItem({ name, percent }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percent}%</span>
      </div>
      <div className="skill-progress-bg">
        <div className="skill-progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

function Skills() {
  const technicalSkills = [
    { name: "Python / C ", percent: 85 },
    { name: "MERN Stack (React, Node, Express, MongoDB)", percent: 85 },
    { name: "Web Technologies (HTML, CSS, JS)", percent: 92 },
    { name: "Flask", percent: 80 },
    { name: "Databases (SQLite, MongoDB, MySQL)", percent: 85 },
    { name: "Tools (Git, VS Code)", percent: 85 }
  ];

  const coreStrengths = [
    "Responsibility", "Leadership", "Communication Skills", "Teamwork and Collaboration"
  ];


  return (
    <section className="skills" id="skills">
      <div className="container">
        <span className="section-tag">Capabilities</span>
        <h2>My Skills</h2>

        <div className="grid-2">
          <div className="glass-card fade-up">
            <h3>Technical Expertise</h3>
            <div className="skills-container">
              {technicalSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>

          <div className="glass-card fade-up">
            <h3>Core Strengths</h3>
            <div className="soft-skills-container">
              {coreStrengths.map((skill) => (
                <div key={skill} className="soft-skill-tag">
                  <span className="dot"></span>
                  {skill}
                </div>
              ))}
            </div>
            <div className="skills-extra">
              <p>Passionate about leveraging modern technologies to solve real-world challenges through continuous learning and innovative thinking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


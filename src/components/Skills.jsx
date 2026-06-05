import "./Skills.css"

function SkillItem({ name }) {
  return (
    <div className="skill-item">
      <span className="skill-badge">{name}</span>
    </div>
  )
}

function Skills() {
  const technicalSkills = [
    { name: "Languages: Python, JavaScript, HTML/CSS" },
    { name: "Frontend: React.js, React Native, HTML/CSS" },
    { name: "Backend: Node.js, Express.js, Flask" },
    { name: "Databases: MongoDB, PostgreSQL, SQLite" },
    { name: "APIs & Real-Time: REST APIs, SocketIO, JWT" },
    { name: "DevOps & Tools: Docker, Git, VS Code" }
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
            <h3>Tech Stack</h3>
            <div className="skills-container">
              {technicalSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} />
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


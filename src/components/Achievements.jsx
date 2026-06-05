import "./Achievements.css"

const achievementsData = [
  {
    title: "BuildWithIndia Hackathon",
    achievement: "Top 5,000 Rank",
    detail: "Ranked in top 5,000 among 25,000 teams nationwide",
    icon: "🏆",
    type: "award"
  },
  {
    title: "Smart India Hackathon 2024",
    achievement: "Screening Round Clearance",
    detail: "Successfully cleared internal screening round in project evaluation",
    icon: "🎯",
    type: "award"
  },
  {
    title: "HackerRank Problem Solving",
    achievement: "3★ Badge | 560+ Hackos",
    detail: "Problem Solving Badge with 3-star ratings in Python and C",
    icon: "⭐",
    type: "award"
  }
];

const certificationsData = [
  {
    title: "MERN Stack Internship",
    issuer: "Spectrum Softtech Solutions Pvt. Ltd.",
    date: "June 2025",
    location: "Kochi, Kerala",
    focus: "Full-stack development with React, Node.js, Express.js, MongoDB",
    link: "https://drive.google.com/file/d/1hY9Z-YV8J5phTRjXQUU6iyFyZQ6--ZvH/view?usp=sharing"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    focus: "Data analysis, visualization, and Python programming",
    link: "https://drive.google.com/file/d/1gWGkxJ3hYF5tdJBP_pAozQgdYTp2X5Xu/view?usp=sharing"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "March 2025",
    focus: "Modern web design principles, CSS, and responsive layouts",
    link: "https://drive.google.com/file/d/1iGqjVXtbdMXelAnVqVUz8iX4scbbAdNy/view?usp=sharing"
  },
  {
    title:"Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "March 2025",
    focus: "JavaScript programming, algorithms, and data structures",
    link: "https://drive.google.com/file/d/1hVf3CnvOh73JyHjcu8pfuaQHbtCMBR7R/view?usp=sharing"
  }
];

function AchievementCard({ achievement }) {
  return (
    <div className="achievement-card glass-card fade-up">
      <div className="achievement-icon">{achievement.icon}</div>
      <h3 className="achievement-title">{achievement.achievement}</h3>
      <p className="achievement-category">{achievement.title}</p>
      <p className="achievement-detail">{achievement.detail}</p>
    </div>
  );
}

function CertificationCard({ cert }) {
  return (
    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-card">
      <div className="cert-marker">📜</div>
      <div className="cert-content">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        <p className="cert-focus">{cert.focus}</p>
        <div className="cert-meta">
          <span className="cert-date">📅 {cert.date}</span>
          {cert.location && <span className="cert-location">📍 {cert.location}</span>}
        </div>
      </div>
    </a>
  );
}

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <span className="section-tag">Recognition</span>
        <h2>Achievements & Certifications</h2>

        {/* Achievements */}
        <div className="achievements-section">
          <h3 className="subsection-title">🏅 Notable Achievements</h3>
          <div className="achievements-grid">
            {achievementsData.map((achievement, i) => (
              <AchievementCard key={i} achievement={achievement} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="subsection-title">📜 Professional Certifications</h3>
          <div className="certifications-list">
            {certificationsData.map((cert, i) => (
              <CertificationCard key={i} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

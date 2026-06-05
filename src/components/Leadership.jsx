import "./Leadership.css"

const leadershipData = [
  {
    role: "Class Representative",
    organization: "St. Joseph's College of Engineering and Technology",
    period: "2025 – 2026",
    description: "Represented a class of 63 students, coordinating communication between students and faculty while supporting academic initiatives and departmental activities.",
    impact: ["Coordinated 63+ students", "Facilitated student-faculty communication", "Organized academic events"],
    icon: "👥"
  },
  {
    role: "Execom Member – Digital Marketing & Community Growth",
    organization: "UiPath & CSI – SJCET Palai",
    period: "2025 – 2026",
    description: "Coordinating digital marketing and community engagement initiatives to grow technical community reach and onboard new members.",
    impact: ["25% LinkedIn engagement growth", "50+ new student onboardings", "Digital campaign execution"],
    icon: "📱"
  },
  {
    role: "Mentor",
    organization: "μLearn Platform",
    period: "2024 – 2026",
    description: "Mentoring peers in web development technologies, achieving Level 4 community status and contributing to technical skill development.",
    impact: ["9,450 karma points earned", "5+ students mentored", "Active tech community contributor"],
    icon: "🎓"
  },
  {
    role: "NSS Documentation Lead",
    organization: "National Social Service – SJCET Palai",
    period: "2024 – 2026",
    description: "Coordinated documentation and reporting for 20+ NSS events, ensuring proper record-keeping and community service tracking.",
    impact: ["Documented 20+ events", "Maintained NSS archives", "Event coordination support"],
    icon: "📝"
  }
];

function LeadershipCard({ role }) {
  return (
    <div className="leadership-card glass-card fade-up">
      <div className="leadership-icon">{role.icon}</div>
      
      <div className="leadership-content">
        <h3 className="leadership-role">{role.role}</h3>
        <p className="leadership-org">{role.organization}</p>
        <p className="leadership-period">📅 {role.period}</p>
        
        <p className="leadership-description">{role.description}</p>

        <div className="leadership-impact">
          <h4>Impact & Achievements</h4>
          <ul className="impact-list">
            {role.impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="container">
        <span className="section-tag">Community Impact</span>
        <h2>Leadership & Community Involvement</h2>
        <p className="section-subtitle">Driving innovation and growth through active leadership and community engagement</p>

        <div className="leadership-grid">
          {leadershipData.map((role, index) => (
            <LeadershipCard key={index} role={role} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Leadership

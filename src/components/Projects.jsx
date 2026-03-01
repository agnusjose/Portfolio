import "./Projects.css"

const projectData = [
  {
    title: "PostJourney",
    tagline: "AI-Integrated Post-Hospital Recovery Platform",

    description: `
PostJourney is an AI-powered mobile healthcare platform designed to assist patients during their post-hospital recovery phase. The application enables safe, guided rehabilitation at home through real-time AI posture monitoring while also providing access to essential medical equipment, home care services, and doctor consultations.

The platform integrates AI-driven rehabilitation monitoring using WebRTC and MediaPipe for real-time posture detection and automated exercise guidance. It also includes a comprehensive healthcare marketplace for equipment booking, care service management, and real-time doctor consultation with chat-based communication.
  `,

    highlights: [
      "AI-powered real-time rehabilitation monitoring using WebRTC + MediaPipe",
      "Posture state detection with automated corrective guidance",
      "Marketplace for medical equipment booking and home care services",
      "Doctor consultation booking with real-time chat",
      "Role-based access control (Patient, Provider, Admin)",
      "Secure REST APIs with JWT authentication"
    ],

    myRole: `
• Developed the Healthcare Marketplace module including equipment booking and care service workflows.
• Implemented role-based access control and secure RESTful APIs using JWT authentication.
• Contributed to AI-powered rehabilitation monitoring using WebRTC and MediaPipe for posture state detection.
• Performed full-system integration, resolved backend routing conflicts, refactored Express modules, and stabilized the application after major merge conflicts.
  `,

    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "WebRTC",
      "MediaPipe",
      "FastAPI",
      "Tailwind CSS"
    ],

    link: "https://github.com/agnusjose"
  },
  {
    title: "CraftConnect",
    tagline: "Real-Time Marketplace for Artisans & Customers",

    description: `
CraftConnect is a web-based marketplace platform designed to bridge artisans and customers through direct communication and customizable product workflows. The platform enables real-time interaction between buyers and manufacturers while supporting order management and product customization.

It integrates WebSocket-based live messaging, a structured manufacturer dashboard, and a streamlined shopping experience for handling orders and product modifications.
  `,

    highlights: [
      "Real-time chat between customers and manufacturers using WebSockets",
      "Manufacturer dashboard for managing orders, messages, and products",
      "Shopping cart with dynamic order handling",
      "Product customization workflow",
      "Lightweight Flask backend with SQLite database"
    ],

    myRole: `
• Designed and developed the real-time chat system (frontend + backend) using WebSockets.
• Implemented shopping cart functionality and order processing logic.
• Built core manufacturer dashboard modules including Manage Orders, Check Messages, and Manage Products.
• Developed REST endpoints and backend logic using Flask and SQLite.
• Integrated real-time communication with persistent storage for message tracking.
  `,

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "SQLite",
      "WebSockets"
    ],

    link: "https://github.com/agnusjose/CraftConnect"
  }
];


function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-tag">Portfolio</span>
        <h2>Selected Works</h2>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <article key={index} className="glass-card project-card fade-up">
              <div className="project-content">
                <span className="project-tagline">{project.tagline}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-wrapper">
                  <p className="project-description">{project.description}</p>
                </div>

                {project.highlights && (
                  <div className="project-section">
                    <h4>Key Highlights</h4>
                    <ul className="highlights-list">
                      {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </div>
                )}

                {project.myRole && (
                  <div className="project-section">
                    <h4>My Role</h4>
                    <p className="role-text">{project.myRole}</p>
                  </div>
                )}

                <div className="tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  Explore Project
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects


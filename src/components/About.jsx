import "./About.css"

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="glass-card fade-up">
          <span className="section-tag">Biography</span>
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm <strong>Agnus Jose</strong>, a final-year B.Tech Computer Science and Engineering student at St. Joseph's College of Engineering and Technology, Palai(CGPA: 8.21), with practical experience in full-stack web development through internships and academic projects. My work has involved developing web applications across healthcare, sports management, and e-commerce domains using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Python.
            </p>
            <p>
               During my internship at ZKILLARC Innovations, I contributed to the development of a sports management platform by building role-based dashboards, backend services, and REST API endpoints supporting multiple user workflows. I have also worked on projects involving authentication systems, real-time communication, database design, and API integration.
            </p>
            <p>
               Beyond technical work, I have taken leadership responsibilities as Class Representative and have actively contributed to student communities through NSS, μLearn, UiPath, and CSI. These experiences have strengthened my communication, coordination, and collaborative problem-solving skills while working with diverse teams.
            </p>
            <p>
              My primary interests lie in software development, backend engineering, and building applications that solve practical problems. I am currently seeking opportunities where I can contribute to software development projects while expanding my experience with scalable systems and modern development practices.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About


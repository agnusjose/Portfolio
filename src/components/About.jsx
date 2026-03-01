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
              I’m <strong>Agnus Jose</strong>, a final-year B.Tech Computer Science and Engineering student at SJCET, Palai.
              I am a self-driven developer skilled in <strong>Python, C, MERN stack, and modern web technologies</strong>.
            </p>
            <p>
              I have hands-on experience in developing full-stack applications with <strong>RESTful APIs, role-based authentication, and real-time communication</strong>.
              Notably, I've worked on AI-based monitoring using <strong>WebRTC and MediaPipe</strong>, demonstrating my ability to integrate complex technologies into modular architectures.
            </p>
            <p>
              An active community leader, I serve as an <strong>Execom Member</strong> for UiPath & CSI at SJCET and have achieved Level 4 status on the <strong>μLearn platform</strong> with 9,450 karma points, where I mentor peers in technical skills.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About


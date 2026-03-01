import "./Home.css"
import agnus2 from "../assets/agnus2.jpg"

function Home() {
  return (
    <section className="home fade-up" id="home">
      <div className="container grid-2">
        <div className="home-content">
          <span className="section-tag">Welcome to my world</span>
          <h2 className="home-title">
            Hi, I'm <br />
            <span className="text-gradient">Agnus Jose</span>
          </h2>
          <p className="home-description">
            Self-driven final-year Computer Science student at SJCET Palai.
            Experienced in C, Python, MERN stack, and AI-integrated applications using WebRTC and MediaPipe.
          </p>

          <div className="home-actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            <button
              className="btn btn-outline"
              style={{ marginLeft: '1rem' }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
          </div>
        </div>
        <div className="home-image">
          <div className="image-wrapper">
            <img src={agnus2} alt="Agnus Jose" className="hero-img" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home


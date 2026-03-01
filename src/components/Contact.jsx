import "./Contact.css"

const contactLinks = [
  { name: "Email", icon: "✉", url: "mailto:agnus.au8@gmail.com", detail: "agnus.au8@gmail.com" },
  { name: "Phone", icon: "📞", url: "tel:+917736964029", detail: "+91 7736964029" },
  { name: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/agnus-jose-59196827b", detail: "Agnus Jose" },
  { name: "GitHub", icon: "", url: "https://github.com/agnusjose", detail: "agnusjose" },
  { name: "HackerRank", icon: "H", url: "https://www.hackerrank.com/profile/agnus_au8", detail: "agnus_au8" },
  { name: "freeCodeCamp", icon: "f", url: "https://www.freecodecamp.org/agnusjose", detail: "agnusjose" }
];


function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card glass-card fade-up">
          <span className="section-tag">Connection</span>
          <h2>Let's Talk</h2>
          <p className="contact-intro">
            I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
            Feel free to reach out through any of these platforms!
          </p>

          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">{link.icon}</div>
                <div className="contact-info">
                  <span className="contact-name">{link.name}</span>
                  <span className="contact-detail">{link.detail}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Agnus Jose. Built with React & Passion.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact


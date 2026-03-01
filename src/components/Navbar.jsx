import './Navbar.css';
import { useState } from 'react';

function Navbar({ scrollToSection, refs }) {
  const [open, setOpen] = useState(false);

  const items = [
    { label: 'Home', ref: refs.homeRef },
    { label: 'About', ref: refs.aboutRef },
    { label: 'Projects', ref: refs.projectsRef },
    { label: 'Skills', ref: refs.skillsRef },
    { label: 'Contact', ref: refs.contactRef },
  ];

  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <div className="nav-inner container">
        <h1 className="logo">Agnus Jose</h1>

        <button aria-label="Menu" className="nav-toggle" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-list">
          {items.map((it) => (
            <li key={it.label} onClick={() => { setOpen(false); scrollToSection(it.ref); }}>
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
